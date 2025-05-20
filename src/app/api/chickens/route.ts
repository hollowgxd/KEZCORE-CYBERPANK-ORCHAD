import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

// CREATE
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { weight, age, eggRate, breed, cageId } = body

    if (!weight || !age || !eggRate || !breed || !cageId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

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
        include: {
    cage: true,
    eggEntries: true,
  },
    })

    return NextResponse.json(chicken, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// READ
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const breed = searchParams.get("breed")
  const minAge = searchParams.get("minAge")
  const maxWeight = searchParams.get("maxWeight")

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
  })

  return NextResponse.json(chickens)
}

// UPDATE
export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, weight, age, eggRate, breed, cageId } = body

    if (!id || !weight || !age || !eggRate || !breed || !cageId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const chicken = await prisma.chicken.update({
      where: { id },
      data: {
        weight,
        age,
        eggRate,
        breed,
        cageId,
      },
        include: {
    cage: true,
    eggEntries: true,
  },
    })

    return NextResponse.json(chicken)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// DELETE
export async function DELETE(req: Request) {
  try {
    const body = await req.json()
    const { id } = body

    if (!id) {
      return NextResponse.json({ error: 'Missing chicken ID' }, { status: 400 })
    }

    await prisma.eggEntry.deleteMany({
  where: { chickenId: id },
})

await prisma.chicken.delete({
  where: { id },
})


    return NextResponse.json({ message: 'Chicken deleted' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
