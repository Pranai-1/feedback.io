/*
  Warnings:

  - Added the required column `collectStarRatings` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collectionType` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consent` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `darkTheme` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disableCheersImage` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxChar` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textButtonText` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thankyouDescription` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thankyouTitle` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoButtonText` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoDuration` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "collectStarRatings" BOOLEAN NOT NULL,
ADD COLUMN     "collectionType" TEXT NOT NULL,
ADD COLUMN     "consent" TEXT NOT NULL,
ADD COLUMN     "darkTheme" BOOLEAN NOT NULL,
ADD COLUMN     "disableCheersImage" BOOLEAN NOT NULL,
ADD COLUMN     "maxChar" TEXT NOT NULL,
ADD COLUMN     "textButtonText" TEXT NOT NULL,
ADD COLUMN     "thankyouDescription" TEXT NOT NULL,
ADD COLUMN     "thankyouTitle" TEXT NOT NULL,
ADD COLUMN     "videoButtonText" TEXT NOT NULL,
ADD COLUMN     "videoDuration" TEXT NOT NULL;
