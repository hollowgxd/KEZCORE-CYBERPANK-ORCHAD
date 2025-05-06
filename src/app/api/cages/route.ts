import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cageId = parseInt(searchParams.get('cageId') || '')

  try {
    // Получаем информацию по клетке, курицам в этой клетке и яйцам
    const cage = await prisma.cage.findUnique({
      where: { id: cageId },
      include: {
        chicken: {
          include: {
            eggEntries: true,  // Включаем яйценоскость
          },
        },
      },
    })

    if (!cage) {
      return NextResponse.json({ error: 'Cage not found' }, { status: 404 })
    }

    // Для каждой курицы находим последнюю запись о яйценоскости
    const chickensWithLastEggCollection = cage.chicken.map((chicken) => {
      // Сортируем яйца по дате (по убыванию)
      const sortedEggEntries = chicken.eggEntries.sort((a, b) => b.date.getTime() - a.date.getTime())
      const lastEggEntry = sortedEggEntries[0] // Получаем последнее яйцо

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
  } catch (error) {
    console.error('Ошибка при запросе данных:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
