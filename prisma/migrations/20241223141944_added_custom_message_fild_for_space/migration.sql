/*
  Warnings:

  - Added the required column `customMessage` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "customMessage" TEXT NOT NULL;
