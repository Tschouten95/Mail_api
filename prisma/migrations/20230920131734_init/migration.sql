/*
  Warnings:

  - You are about to drop the column `province` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `Recipient` table. All the data in the column will be lost.
  - Added the required column `provinceCode` to the `Address` table without a default value. This is not possible if the table is not empty.

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
    "provinceCode" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Address" ("city", "countryId", "houseNumber", "id", "street", "streetType", "zipcode") SELECT "city", "countryId", "houseNumber", "id", "street", "streetType", "zipcode" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE TABLE "new_Recipient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Recipient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipient" ("id", "userId") SELECT "id", "userId" FROM "Recipient";
DROP TABLE "Recipient";
ALTER TABLE "new_Recipient" RENAME TO "Recipient";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
