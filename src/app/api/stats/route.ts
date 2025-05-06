import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const weightParam = searchParams.get('weight')
  const ageParam = searchParams.get('age')

  const weight = weightParam ? parseFloat(weightParam) : null
  const age = ageParam ? parseInt(ageParam) : null


  // if (!weight && !age) {
  //   return NextResponse.json({ error: 'At least one of weight or age must be provided' }, { status: 400 })
  // }

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

  return NextResponse.json({ average })
}
