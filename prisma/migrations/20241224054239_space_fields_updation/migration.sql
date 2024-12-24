/*
  Warnings:

  - You are about to drop the column `collectStarRatings` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `consent` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `maxChar` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `videoDuration` on the `Space` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Space" DROP COLUMN "collectStarRatings",
DROP COLUMN "consent",
DROP COLUMN "maxChar",
DROP COLUMN "videoDuration";
