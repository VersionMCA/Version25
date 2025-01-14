/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `eventName` on the `Event` table. All the data in the column will be lost.
  - The `id` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxTeamSize` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minTeamSize` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `eventId` on the `Registration` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `eventId` on the `Team` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('INDIVIDUAL', 'TEAM');

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_eventId_fkey";

-- DropIndex
DROP INDEX "Event_eventName_key";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "eventName",
ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "maxTeamSize" INTEGER NOT NULL,
ADD COLUMN     "minTeamSize" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3),
ADD COLUMN     "venue" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "EventType" NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "EventDetail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "EventDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_userId_eventId_key" ON "Registration"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_eventId_key" ON "Team"("teamName", "eventId");

-- AddForeignKey
ALTER TABLE "EventDetail" ADD CONSTRAINT "EventDetail_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
