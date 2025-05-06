import { NextResponse } from 'next/server'
import { PrismaClient, EggType } from '@prisma/client'

const prisma = new PrismaClient()

const EGG_PRICES: Record<EggType, number> = {
  STANDARD: 10,
  PREMIUM: 20,
  ORGANIC: 100,
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  if (!from || !to) {
    return NextResponse.json({ error: 'from и to обязательны' }, { status: 400 })
  }

  const fromDate = new Date(from)
  const toDate = new Date(to)

  if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
    return NextResponse.json({ error: 'Неверный формат дат' }, { status: 400 })
  }

  try {
    const entries = await prisma.eggEntry.findMany({
      where: {
        date: {
          gte: fromDate,
          lte: toDate,
        },
      },
      select: {
        eggsLaid: true,
        type: true, // ← обязательно!
      },
    })

    if (entries.length === 0) {
      return NextResponse.json({ message: 'Нет данных за указанный период' }, { status: 200 })
    }

    let totalEggs = 0
    let totalValue = 0

    for (const entry of entries) {
      const pricePerEgg = EGG_PRICES[entry.type]
      if (pricePerEgg) { // проверка на наличие значения для типа яйца
        totalEggs += entry.eggsLaid
        totalValue += entry.eggsLaid * pricePerEgg
      } else {
        console.error(`Неизвестный тип яйца: ${entry.type}`)
      }
    }

    return NextResponse.json({
      totalEggs,
      totalValue,
    })

  } catch (error) {
    console.error('Ошибка при запросе к базе данных:', error)
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 })
  } finally {
    await prisma.$disconnect() // Закрытие соединения с базой данных
  }
}
