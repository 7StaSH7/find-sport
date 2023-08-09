import { usersToGrounds } from '@src/database/schemas/usersToGrounds';
import { relations } from 'drizzle-orm';
import { numeric, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const groundsTable = pgTable('grounds', {
  uuid: uuid('uuid').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }),
  latitude: numeric('latitude').notNull(),
  longitude: numeric('longitude').notNull(),
});

export const groundsRelations = relations(groundsTable, ({ many }) => ({
  usersToGrounds: many(usersToGrounds),
}));
