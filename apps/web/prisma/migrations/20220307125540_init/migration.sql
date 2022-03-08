-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "authorId" INTEGER,
    "content" TEXT,
    "id" SERIAL NOT NULL PRIMARY KEY,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
