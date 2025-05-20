import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cageIdParam = searchParams.get('cageId');
  const cageId = cageIdParam ? parseInt(cageIdParam) : null;

  try {
    // Если передан cageId — вернуть одну клетку
    if (cageId) {
      const cage = await prisma.cage.findUnique({
        where: { id: cageId },
        include: {
          chicken: {
            include: { eggEntries: true },
          },
          worker: true,
        },
      });

      if (!cage) {
        return NextResponse.json([], { status: 200 }); // Возвращаем пустой массив, чтобы клиент не упал
      }

      const eggEntries = cage.chicken?.eggEntries || [];
      const sortedEggEntries = eggEntries.sort((a, b) => b.date.getTime() - a.date.getTime());
      const lastEntry = sortedEggEntries[0];

      const result = [{
        id: cage.id,
        chicken: cage.chicken
          ? {
              id: cage.chicken.id,
              breed: cage.chicken.breed,
              weight: cage.chicken.weight,
              eggRate: cage.chicken.eggRate,
              age: cage.chicken.age,
            }
          : null,
        worker: cage.worker,
        eggsCollected: eggEntries.reduce((sum, e) => sum + e.eggsLaid, 0),
        lastEggCollectionDate: lastEntry?.date || null,
      }];

      return NextResponse.json(result, { status: 200 });
    }

    // Если cageId не передан — вернуть все клетки
    const cages = await prisma.cage.findMany({
      include: {
        chicken: {
          include: { eggEntries: true },
        },
        worker: true,
      },
    });

    const enrichedCages = cages.map((cage) => {
      const eggEntries = cage.chicken?.eggEntries || [];
      const sortedEggs = [...eggEntries].sort((a, b) => b.date.getTime() - a.date.getTime());
      const totalEggs = eggEntries.reduce((sum, entry) => sum + entry.eggsLaid, 0);
      const lastEggDate = sortedEggs[0]?.date ?? null;

      return {
        id: cage.id,
        chicken: cage.chicken
          ? {
              id: cage.chicken.id,
              breed: cage.chicken.breed,
              age: cage.chicken.age,
              weight: cage.chicken.weight,
              eggRate: cage.chicken.eggRate,
            }
          : null,
        worker: cage.worker,
        eggsCollected: totalEggs,
        lastEggCollectionDate: lastEggDate,
      };
    });

    return NextResponse.json(enrichedCages, { status: 200 });
  } catch (error) {
    console.error('Ошибка при получении клеток:', error);
    return NextResponse.json([], { status: 200 }); // Даже при ошибке — вернуть массив
  }
}

export async function POST(req: Request) {
  const { chickenId, workerId, cageId } = await req.json();

  try {
    if (cageId) {
      const updateData: any = {};
      if (chickenId) updateData.chicken = { connect: { id: chickenId } };
      if (workerId)  updateData.worker  = { connect: { id: workerId } };

      const updatedCage = await prisma.cage.update({
        where: { id: cageId },
        data: updateData,
      });

      // не забудьте синхронизировать chicken.cageId, если нужно...
      return NextResponse.json(updatedCage);
    } else {
      const createData: any = {};
      if (chickenId) createData.chicken = { connect: { id: chickenId } };
      if (workerId)  createData.worker  = { connect: { id: workerId } };

      const newCage = await prisma.cage.create({
        data: createData,
      });

      // синхронизировать chicken.cageId если требуется
      return NextResponse.json(newCage, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка' }, { status: 500 });
  }
}





export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'ID клетки обязателен' }, { status: 400 });
  }

  try {
    await prisma.cage.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Ошибка при удалении клетки:', err);
    return NextResponse.json({ error: 'Ошибка при удалении клетки' }, { status: 500 });
  }
}
