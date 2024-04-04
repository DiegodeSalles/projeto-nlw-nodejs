-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_id" TEXT NOT NULL,
    "eventPublic_id" TEXT NOT NULL,
    CONSTRAINT "attendees_eventPublic_id_fkey" FOREIGN KEY ("eventPublic_id") REFERENCES "events" ("public_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
