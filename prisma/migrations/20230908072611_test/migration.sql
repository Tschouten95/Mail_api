/*
  Warnings:

  - Added the required column `countryId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Address" ("city", "id", "number", "street", "zipcode") SELECT "city", "id", "number", "street", "zipcode" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE UNIQUE INDEX "Address_countryId_key" ON "Address"("countryId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
