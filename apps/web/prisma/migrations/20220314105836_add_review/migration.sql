-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY SERIAL,
    "movieId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdDate" DATETIME NOT NULL
);
