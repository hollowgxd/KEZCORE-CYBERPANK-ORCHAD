import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cageIdParam = searchParams.get('cageId')
  const cageId = cageIdParam ? parseInt(cageIdParam) : null

  try {
    if (cageId) {
      const cage = await prisma.cage.findUnique({
        where: { id: cageId },
        include: {
          chicken: {
            include: { eggEntries: true },
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

export async function PUT(req: Request) {
  const body = await req.json()
  const { id, data } = body

  if (!id || !data) {
    return NextResponse.json({ error: 'Missing cage ID or data' }, { status: 400 })
  }

  try {
    const updatedCage = await prisma.cage.update({
      where: { id },
      data,
    })

    return NextResponse.json(updatedCage)
  } catch (error) {
    console.error('Ошибка при обновлении клетки:', error)
    return NextResponse.json({ error: 'Cage update failed' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(req: Request) {
  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ error: 'Missing cage ID' }, { status: 400 })
  }

  try {
    await prisma.cage.delete({
      where: { id },
    })

    return NextResponse.json({ message: `Cage ${id} deleted successfully` })
  } catch (error) {
    console.error('Ошибка при удалении клетки:', error)
    return NextResponse.json({ error: 'Cage deletion failed' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
