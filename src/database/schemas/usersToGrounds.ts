import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { groundsTable } from "./grounds";
import { relations } from "drizzle-orm";

export const usersToGrounds = pgTable(
  "users_to_grounds",
  {
    userUuid: uuid("user_uuid")
      .notNull()
      .references(() => usersTable.uuid),
    groundUuid: uuid("ground_uuid")
      .notNull()
      .references(() => groundsTable.uuid),
  },
  (t) => ({
    pk: primaryKey(t.userUuid, t.groundUuid),
  })
);

export const usersToGroundsRelations = relations(usersToGrounds, ({ one }) => ({
  ground: one(groundsTable, {
    fields: [usersToGrounds.groundUuid],
    references: [groundsTable.uuid],
  }),
  user: one(usersTable, {
    fields: [usersToGrounds.userUuid],
    references: [usersTable.uuid],
  }),
}));
