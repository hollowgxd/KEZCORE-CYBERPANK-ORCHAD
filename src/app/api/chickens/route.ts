import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { weight, age, eggRate, breed, cageId } = body

    if (!weight || !age || !eggRate || !breed || !cageId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Проверка: клетка должна существовать
    const cage = await prisma.cage.findUnique({
      where: { id: cageId },
    })

    if (!cage) {
      return NextResponse.json({ error: 'Cage does not exist' }, { status: 404 })
    }
    const chicken = await prisma.chicken.create({
      data: {
        weight,
        age,
        eggRate,
        breed,
        cageId,
      },
    })

    return NextResponse.json(chicken, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
  
    const breed = searchParams.get("breed");
    const minAge = searchParams.get("minAge");
    const maxWeight = searchParams.get("maxWeight");
  
    const chickens = await prisma.chicken.findMany({
      where: {
        ...(breed && { breed }),
        ...(minAge && { age: { gte: parseInt(minAge) } }),
        ...(maxWeight && { weight: { lte: parseFloat(maxWeight) } }),
      },
      include: {
        cage: true,
        eggEntries: true,
      },
    });
  
    return NextResponse.json(chickens);
  }
  
