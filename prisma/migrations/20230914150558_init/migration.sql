/*
  Warnings:

  - Added the required column `priceInCentsEnvelope` to the `PostUnitPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceInCentsPerPage` to the `PostUnitPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceInCentsPrinting` to the `PostUnitPrice` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostUnitPrice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "priceInCents" INTEGER NOT NULL,
    "priceInCentsPerPage" INTEGER NOT NULL,
    "priceInCentsPrinting" INTEGER NOT NULL,
    "priceInCentsEnvelope" INTEGER NOT NULL,
    "priceInCentsfrontAndBack" INTEGER DEFAULT 0,
    "priceInCentsColoredPages" INTEGER DEFAULT 0,
    "priceInCentsReturnReceipt" INTEGER DEFAULT 0,
    "priceInCentsShippingReceipt" INTEGER DEFAULT 0,
    "postalServiceId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "PostUnitPrice_postalServiceId_fkey" FOREIGN KEY ("postalServiceId") REFERENCES "PostalService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostUnitPrice_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostUnitPrice" ("countryId", "id", "postalServiceId", "priceInCents") SELECT "countryId", "id", "postalServiceId", "priceInCents" FROM "PostUnitPrice";
DROP TABLE "PostUnitPrice";
ALTER TABLE "new_PostUnitPrice" RENAME TO "PostUnitPrice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
