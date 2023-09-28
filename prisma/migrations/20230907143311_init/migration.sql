-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL
);
