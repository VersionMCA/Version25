/*
  Warnings:

  - You are about to drop the column `participants` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `Registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "participants",
DROP COLUMN "teamName";
