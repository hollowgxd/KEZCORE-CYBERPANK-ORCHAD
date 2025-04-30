import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function POST(req: Request) {
    const body = await req.json()
    const { name,  salary } = body
  
    if (!name  || !salary) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
  
    const worker = await prisma.worker.create({
      data: { name,  salary },
    })
  
    return NextResponse.json(worker, { status: 201 })
  }
  
  // export async function GET() {
  //   const workers = await prisma.worker.findMany({
  //     include: { cages: { include: { cage: true } } },
  //   })

  //   return NextResponse.json(workers)
  // }
  export async function DELETE(req: Request) {
    const { id } = await req.json();
  
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }
  
    await prisma.workerCage.deleteMany({ where: { workerId: id } });
    await prisma.worker.delete({ where: { id } });
  
    return NextResponse.json({ message: "Deleted successfully" });
  }
  export async function PUT(req: Request) {
    const data = await req.json();
    const { id, name, salary, cageIds } = data;
  
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }
  
    // Удалим старые связи с клетками и создадим новые
    await prisma.workerCage.deleteMany({ where: { workerId: id } });
  
    const updated = await prisma.worker.update({
      where: { id },
      data: {
        name,
        salary,
        cages: {
          create: cageIds.map((cageId: number) => ({ cageId })),
        },
      },
    });
  
    return NextResponse.json(updated);
  }
  export async function GET() {
    const workers = await prisma.worker.findMany({
      include: {
        cages: {
          include: {
            cage: {
              include: {
                chicken: true,
              },
            },
          },
        },
      },
    });
  
    const formatted = workers.map(worker => {
      const chickensCount = worker.cages.reduce((sum, wc) => {
        return sum + wc.cage.chicken.length;
      }, 0);
  
      return {
        id: worker.id,
        name: worker.name,
        salary: worker.salary,
        chickensCount,
      };
    });
  
    return NextResponse.json(formatted);
  }
  