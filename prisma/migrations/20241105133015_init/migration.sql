-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "chovendo" BOOLEAN NOT NULL,
    "alagamento" BOOLEAN NOT NULL,
    "qntChuva" DOUBLE PRECISION NOT NULL,
    "temperatura" DOUBLE PRECISION NOT NULL,
    "umidade" DOUBLE PRECISION NOT NULL,
    "umidadeSolo" DOUBLE PRECISION NOT NULL,
    "vibracao" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);
