import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { name, salary } = body

  if (!name || salary === undefined) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const worker = await prisma.worker.create({
    data: { name, salary: parseFloat(salary) },
  })

  return NextResponse.json(worker, { status: 201 })
}

export async function GET() {
  const workers = await prisma.worker.findMany({
    include: {
      cages: {
        include: {
          chicken: true,
        },
      },
    },
  });

  const formatted = workers.map((worker) => {
    const cageIds = worker.cages.map((c) => c.id);
    const chickensCount = worker.cages.filter((c) => c.chicken !== null).length;

    // Суммируем eggRate всех куриц, обслуживаемых этим работником
    const totalEggRate = worker.cages.reduce((sum, cage) => {
      return sum + (cage.chicken?.eggRate || 0);
    }, 0);

    return {
      id: worker.id,
      name: worker.name,
      salary: worker.salary,
      cageIds,
      chickensCount,
      totalEggRate,
    };
  });

  return NextResponse.json(formatted);
}


export async function DELETE(req: Request) {
  const { id } = await req.json()

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  // Перед удалением работника надо "отвязать" клетки от него, чтобы не сломать FK
  await prisma.cage.updateMany({
    where: { workerId: id },
    data: { workerId: undefined },
  })

  await prisma.worker.delete({ where: { id } })

  return NextResponse.json({ message: 'Deleted successfully' })
}

export async function PUT(req: Request) {
  const data = await req.json()
  const { id, name, salary, cageIds } = data

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  // Обновляем данные работника
  const updatedWorker = await prisma.worker.update({
    where: { id },
    data: {
      name,
      salary: parseFloat(salary),
    },
  })

  // Сначала "отвязываем" все клетки, которые сейчас привязаны к этому работнику
  await prisma.cage.updateMany({
    where: { workerId: id },
    data: { workerId: undefined },
  })

  // Затем "привязываем" клетки из cageIds к работнику (если cageIds есть)
  if (Array.isArray(cageIds)) {
    await prisma.cage.updateMany({
      where: { id: { in: cageIds } },
      data: { workerId: id },
    })
  }

  // Вернем обновленного работника с обновленными клетками
  const refreshedWorker = await prisma.worker.findUnique({
    where: { id },
    include: { cages: true },
  })

  return NextResponse.json(refreshedWorker)
}
