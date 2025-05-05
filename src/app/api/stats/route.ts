import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const weight = parseFloat(searchParams.get('weight') || '')
  const age = parseInt(searchParams.get('age') || '')

  if (isNaN(weight) || isNaN(age)) {
    return NextResponse.json({ error: 'Invalid weight or age' }, { status: 400 })
  }

  const chickens = await prisma.chicken.findMany({
    where: {
      weight: {
        gte: weight - 0.05,
        lte: weight + 0.05,
      },
      age,
    },
  })

  const totalRate = chickens.reduce((sum, chicken) => sum + chicken.eggRate, 0)
  const average = chickens.length > 0 ? totalRate / chickens.length : 0

  return NextResponse.json({ average })
}
