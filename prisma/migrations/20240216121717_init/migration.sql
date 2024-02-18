-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PhoneNumber" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "contactId" INTEGER NOT NULL,
    CONSTRAINT "PhoneNumber_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PhoneNumber" ("contactId", "id", "number") SELECT "contactId", "id", "number" FROM "PhoneNumber";
DROP TABLE "PhoneNumber";
ALTER TABLE "new_PhoneNumber" RENAME TO "PhoneNumber";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
