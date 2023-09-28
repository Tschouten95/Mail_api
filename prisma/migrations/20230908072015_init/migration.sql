-- CreateTable
CREATE TABLE "Recipient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "Recipient_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipient_addressId_key" ON "Recipient"("addressId");
