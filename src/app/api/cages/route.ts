import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cageIdParam = searchParams.get('cageId')
  const cageId = cageIdParam ? parseInt(cageIdParam) : null

  try {
    if (cageId) {
      // Получение информации по конкретной клетке
      const cage = await prisma.cage.findUnique({
        where: { id: cageId },
        include: {
          chicken: {
            include: {
              eggEntries: true,
            },
          },
          workers: true,
        },
      })

      if (!cage) {
        return NextResponse.json({ error: 'Cage not found' }, { status: 404 })
      }

      const chickensWithLastEggCollection = cage.chicken.map((chicken) => {
        const sortedEggEntries = chicken.eggEntries.sort((a, b) => b.date.getTime() - a.date.getTime())
        const lastEggEntry = sortedEggEntries[0]

        return {
          chickenId: chicken.id,
          lastEggCollectionDate: lastEggEntry ? lastEggEntry.date : 'Неизвестно',
          eggsCollected: lastEggEntry ? lastEggEntry.eggsLaid : 0,
        }
      })

      return NextResponse.json({
        cage,
        chickensWithLastEggCollection,
      })
    } else {
      // Получение всех клеток
      const cages = await prisma.cage.findMany({
        include: { chicken: true, workers: true },
      })

      return NextResponse.json(cages)
    }
  } catch (error) {
    console.error('Ошибка при запросе данных:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
