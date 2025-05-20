-- CreateEnum
CREATE TYPE "EggType" AS ENUM ('STANDARD', 'PREMIUM', 'ORGANIC');

-- CreateTable
CREATE TABLE "chickens" (
    "id" SERIAL NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "age" INTEGER NOT NULL,
    "eggRate" DOUBLE PRECISION NOT NULL,
    "breed" TEXT NOT NULL,
    "cageId" INTEGER NOT NULL,

    CONSTRAINT "chickens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cages" (
    "id" SERIAL NOT NULL,
    "chickenId" INTEGER,
    "workerId" INTEGER,

    CONSTRAINT "cages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "workers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "egg_entries" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "eggsLaid" INTEGER NOT NULL,
    "type" "EggType" NOT NULL DEFAULT 'STANDARD',
    "chickenId" INTEGER NOT NULL,

    CONSTRAINT "egg_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cages_chickenId_key" ON "cages"("chickenId");

-- AddForeignKey
ALTER TABLE "cages" ADD CONSTRAINT "cages_chickenId_fkey" FOREIGN KEY ("chickenId") REFERENCES "chickens"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cages" ADD CONSTRAINT "cages_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "workers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "egg_entries" ADD CONSTRAINT "egg_entries_chickenId_fkey" FOREIGN KEY ("chickenId") REFERENCES "chickens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
