/*
  Warnings:

  - Added the required column `userId` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "addressId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Recipient_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recipient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipient" ("addressId", "id") SELECT "addressId", "id" FROM "Recipient";
DROP TABLE "Recipient";
ALTER TABLE "new_Recipient" RENAME TO "Recipient";
CREATE UNIQUE INDEX "Recipient_addressId_key" ON "Recipient"("addressId");
CREATE UNIQUE INDEX "Recipient_userId_key" ON "Recipient"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
