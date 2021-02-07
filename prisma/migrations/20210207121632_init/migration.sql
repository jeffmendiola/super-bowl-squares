-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "homeScore" INTEGER NOT NULL,
    "homeTeamId" INTEGER NOT NULL,
    "awayScore" INTEGER NOT NULL,
    "awayTeamId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Square" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rowDigits" INTEGER[],
    "colDigits" INTEGER[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cell" (
    "rowPos" INTEGER NOT NULL,
    "colPos" INTEGER NOT NULL,
    "squareId" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,

    PRIMARY KEY ("rowPos","colPos","squareId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Match_homeTeamId_unique" ON "Match"("homeTeamId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_awayTeamId_unique" ON "Match"("awayTeamId");

-- AddForeignKey
ALTER TABLE "Match" ADD FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Square" ADD FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD FOREIGN KEY ("squareId") REFERENCES "Square"("id") ON DELETE CASCADE ON UPDATE CASCADE;
