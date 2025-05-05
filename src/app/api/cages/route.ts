import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ error: 'Missing cage ID' }, { status: 400 })
  }

  const cage = await prisma.cage.create({
    data: { id },
  })

  return NextResponse.json(cage, { status: 201 })
}

export async function GET() {
  const cages = await prisma.cage.findMany({
    include: { chicken: true, workers: true },
  })

  return NextResponse.json(cages)
}
