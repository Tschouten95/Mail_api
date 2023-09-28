-- CreateTable
CREATE TABLE "PostalService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PostUnitPrice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "priceInCents" INTEGER NOT NULL,
    "postalServiceId" INTEGER NOT NULL,
    CONSTRAINT "PostUnitPrice_postalServiceId_fkey" FOREIGN KEY ("postalServiceId") REFERENCES "PostalService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PostUnitPrice_postalServiceId_key" ON "PostUnitPrice"("postalServiceId");
