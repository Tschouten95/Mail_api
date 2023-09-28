/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "companyName" TEXT,
    "token" TEXT,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("addressId", "companyName", "firstName", "id", "lastName", "token") SELECT "addressId", "companyName", "firstName", "id", "lastName", "token" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_addressId_key" ON "User"("addressId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
