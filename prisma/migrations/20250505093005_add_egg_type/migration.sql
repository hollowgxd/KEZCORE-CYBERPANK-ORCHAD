-- CreateEnum
CREATE TYPE "EggType" AS ENUM ('STANDARD', 'PREMIUM');

-- AlterTable
ALTER TABLE "egg_entries" ADD COLUMN     "type" "EggType" NOT NULL DEFAULT 'STANDARD';
