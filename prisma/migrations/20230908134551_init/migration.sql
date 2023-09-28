/*
  Warnings:

  - Added the required column `recipientId` to the `PostUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `PostUnitPrice` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Recipient_userId_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "recipientId" INTEGER NOT NULL,
    CONSTRAINT "PostUnit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostUnit_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Recipient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostUnit" ("id", "text", "userId") SELECT "id", "text", "userId" FROM "PostUnit";
DROP TABLE "PostUnit";
ALTER TABLE "new_PostUnit" RENAME TO "PostUnit";
CREATE UNIQUE INDEX "PostUnit_userId_key" ON "PostUnit"("userId");
CREATE UNIQUE INDEX "PostUnit_recipientId_key" ON "PostUnit"("recipientId");
CREATE TABLE "new_PostUnitPrice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "priceInCents" INTEGER NOT NULL,
    "postalServiceId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "PostUnitPrice_postalServiceId_fkey" FOREIGN KEY ("postalServiceId") REFERENCES "PostalService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostUnitPrice_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostUnitPrice" ("id", "postalServiceId", "priceInCents") SELECT "id", "postalServiceId", "priceInCents" FROM "PostUnitPrice";
DROP TABLE "PostUnitPrice";
ALTER TABLE "new_PostUnitPrice" RENAME TO "PostUnitPrice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
