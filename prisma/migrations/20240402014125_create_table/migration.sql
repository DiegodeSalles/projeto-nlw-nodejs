-- CreateTable
CREATE TABLE "events" (
    "public_id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");
