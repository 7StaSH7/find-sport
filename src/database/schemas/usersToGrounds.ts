import { groundsTable } from '@src/database/schemas/grounds';
import { usersTable } from '@src/database/schemas/users';
import { relations } from 'drizzle-orm';
import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';

export const usersToGrounds = pgTable(
  'users_to_grounds',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => usersTable.uuid),
    groundId: uuid('ground_id')
      .notNull()
      .references(() => groundsTable.uuid),
  },
  (table) => ({
    pk: primaryKey(table.userId, table.groundId),
  }),
);

export const usersToGroundsRelations = relations(usersToGrounds, ({ one }) => ({
  user: one(usersTable, {
    fields: [usersToGrounds.userId],
    references: [usersTable.uuid],
  }),
  ground: one(groundsTable, {
    fields: [usersToGrounds.groundId],
    references: [groundsTable.uuid],
  }),
}));
