-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "companyName" TEXT,
    "email" TEXT NOT NULL,
    "token" TEXT,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("addressId", "email", "firstName", "id", "lastName", "token") SELECT "addressId", "email", "firstName", "id", "lastName", "token" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_addressId_key" ON "User"("addressId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
