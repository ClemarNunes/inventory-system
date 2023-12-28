-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "precoDeVenda" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT[],
    "pcVenda" INTEGER[],
    "qt" INTEGER[],
    "total" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_name_key" ON "produtos"("name");
