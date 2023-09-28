/*
  Warnings:

  - You are about to drop the column `number` on the `Address` table. All the data in the column will be lost.
  - Added the required column `houseNumber` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetType` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "streetType" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Address" ("city", "countryId", "id", "street", "zipcode") SELECT "city", "countryId", "id", "street", "zipcode" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
