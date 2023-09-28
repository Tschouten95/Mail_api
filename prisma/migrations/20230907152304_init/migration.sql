-- CreateTable
CREATE TABLE "PostUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "PostUnit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PostUnit_userId_key" ON "PostUnit"("userId");
