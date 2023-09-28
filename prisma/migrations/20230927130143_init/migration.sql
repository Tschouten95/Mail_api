/*
  Warnings:

  - You are about to drop the column `userId` on the `Recipient` table. All the data in the column will be lost.
  - Added the required column `city` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseNumber` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provinceCode` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetType` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "recipientId" INTEGER NOT NULL,
    CONSTRAINT "PostUnit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostUnit" ("id", "recipientId", "text", "userId") SELECT "id", "recipientId", "text", "userId" FROM "PostUnit";
DROP TABLE "PostUnit";
ALTER TABLE "new_PostUnit" RENAME TO "PostUnit";
CREATE TABLE "new_Recipient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "companyName" TEXT,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "streetType" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "provinceCode" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Recipient_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipient" ("id") SELECT "id" FROM "Recipient";
DROP TABLE "Recipient";
ALTER TABLE "new_Recipient" RENAME TO "Recipient";
CREATE UNIQUE INDEX "Recipient_zipcode_key" ON "Recipient"("zipcode");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
