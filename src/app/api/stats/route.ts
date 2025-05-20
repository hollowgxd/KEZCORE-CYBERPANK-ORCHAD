import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const weightParam = searchParams.get('weight')
    const ageParam = searchParams.get('age')

    const weight = weightParam ? parseFloat(weightParam) : null
    const age = ageParam ? parseInt(ageParam) : null

    if ((weightParam && isNaN(parseFloat(weightParam))) || (ageParam && isNaN(parseInt(ageParam)))) {
  return NextResponse.json({ error: 'Invalid weight or age parameter' }, { status: 400 })
}

    const chickens = await prisma.chicken.findMany({
      where: {
        ...(weight !== null && {
          weight: {
            gte: weight - 3,
            lte: weight + 3,
          },
        }),
        ...(age !== null && {
          age: {
            gte: age - 3,
            lte: age + 3,
          },
        }),
      },
    })

    const totalRate = chickens.reduce((sum, chicken) => sum + chicken.eggRate, 0)
    const average = chickens.length > 0 ? totalRate / chickens.length : 0

    return NextResponse.json({ average }, { status: 200 })
  } catch (error) {
    console.error('Ошибка при получении среднего eggRate:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
