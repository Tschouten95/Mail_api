/*
  Warnings:

  - You are about to drop the column `key` on the `ApiKey` table. All the data in the column will be lost.
  - Added the required column `token` to the `ApiKey` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApiKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL
);
INSERT INTO "new_ApiKey" ("id") SELECT "id" FROM "ApiKey";
DROP TABLE "ApiKey";
ALTER TABLE "new_ApiKey" RENAME TO "ApiKey";
CREATE UNIQUE INDEX "ApiKey_token_key" ON "ApiKey"("token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
