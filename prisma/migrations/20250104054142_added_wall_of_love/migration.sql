-- CreateTable
CREATE TABLE "WallOfLove" (
    "id" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,

    CONSTRAINT "WallOfLove_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WallOfLove_reviewId_key" ON "WallOfLove"("reviewId");

-- AddForeignKey
ALTER TABLE "WallOfLove" ADD CONSTRAINT "WallOfLove_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;
