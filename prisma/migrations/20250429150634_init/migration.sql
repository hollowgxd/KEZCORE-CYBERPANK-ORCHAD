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
    "id" INTEGER NOT NULL,

    CONSTRAINT "cages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "passportData" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "workers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "worker_cages" (
    "workerId" INTEGER NOT NULL,
    "cageId" INTEGER NOT NULL,

    CONSTRAINT "worker_cages_pkey" PRIMARY KEY ("workerId","cageId")
);

-- CreateTable
CREATE TABLE "egg_entries" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "eggsLaid" INTEGER NOT NULL,
    "chickenId" INTEGER NOT NULL,

    CONSTRAINT "egg_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chickens_cageId_key" ON "chickens"("cageId");

-- AddForeignKey
ALTER TABLE "chickens" ADD CONSTRAINT "chickens_cageId_fkey" FOREIGN KEY ("cageId") REFERENCES "cages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "worker_cages" ADD CONSTRAINT "worker_cages_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "workers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "worker_cages" ADD CONSTRAINT "worker_cages_cageId_fkey" FOREIGN KEY ("cageId") REFERENCES "cages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "egg_entries" ADD CONSTRAINT "egg_entries_chickenId_fkey" FOREIGN KEY ("chickenId") REFERENCES "chickens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
