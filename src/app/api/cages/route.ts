import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cageIdParam = searchParams.get('cageId');
  const cageId = cageIdParam ? parseInt(cageIdParam) : null;

  try {
    if (cageId) {
      // По одной клетке (оставим как было)
      const cage = await prisma.cage.findUnique({
        where: { id: cageId },
        include: {
          chicken: {
            include: { eggEntries: true },
          },
          workers: true,
        },
      });

      if (!cage) {
        return NextResponse.json({ error: 'Cage not found' }, { status: 404 });
      }

      const chickensWithLastEggCollection = cage.chicken.map((chicken) => {
        const sortedEggEntries = [...(chicken.eggEntries || [])].sort((a, b) => b.date.getTime() - a.date.getTime());
        const lastEntry = sortedEggEntries[0];

        return {
          chickenId: chicken.id,
          lastEggCollectionDate: lastEntry?.date || null,
          eggsCollected: lastEntry?.eggsLaid || 0,
        };
      });

      return NextResponse.json({
        cage,
        chickensWithLastEggCollection,
      });
    } else {
      // Получение всех клеток + расширенные данные
      const cages = await prisma.cage.findMany({
        include: {
          chicken: {
            include: {
              eggEntries: true,
            },
          },
          workers: true,
        },
      });

      const enrichedCages = cages.map((cage) => {
        const allEggs = cage.chicken.flatMap((chicken) => chicken.eggEntries || []);
        const sortedEggs = [...allEggs].sort((a, b) => b.date.getTime() - a.date.getTime());

        const totalEggs = allEggs.reduce((sum, entry) => sum + entry.eggsLaid, 0);
        const lastEggDate = sortedEggs[0]?.date ?? null;

        return {
          id: cage.id,
          chicken: cage.chicken.map(({ eggEntries, ...rest }) => rest), // Уберём eggEntries
          workers: cage.workers,
          eggsCollected: totalEggs,
          lastEggCollectionDate: lastEggDate,
        };
      });

      return NextResponse.json(enrichedCages);
    }
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
