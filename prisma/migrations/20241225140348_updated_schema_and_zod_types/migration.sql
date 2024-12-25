/*
  Warnings:

  - You are about to drop the column `description` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Space` table. All the data in the column will be lost.
  - Added the required column `headerTitle` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spaceLogo` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `questions` on the `Space` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Space" DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "title",
ADD COLUMN     "headerTitle" TEXT NOT NULL,
ADD COLUMN     "spaceLogo" TEXT NOT NULL,
DROP COLUMN "questions",
ADD COLUMN     "questions" JSONB NOT NULL;
