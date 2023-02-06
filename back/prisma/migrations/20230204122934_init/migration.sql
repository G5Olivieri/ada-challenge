-- CreateTable
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "Card" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "lista" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
