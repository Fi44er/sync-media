-- CreateTable
CREATE TABLE "audios" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "buffer" BYTEA NOT NULL,
    "room-id" INTEGER NOT NULL,

    CONSTRAINT "audios_pkey" PRIMARY KEY ("id")
);
