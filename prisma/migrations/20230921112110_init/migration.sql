/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Recipient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recipient_userId_key" ON "Recipient"("userId");
