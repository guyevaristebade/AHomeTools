/*
  Warnings:

  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."User_profileId_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "profileId";
