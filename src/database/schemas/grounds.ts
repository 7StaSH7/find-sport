import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { usersToGrounds } from "./usersToGrounds";

export const groundsTable = pgTable("grounds", {
  uuid: uuid("uuid").defaultRandom().primaryKey(),
});

export const groundsRelations = relations(groundsTable, ({ many }) => ({
  usersToGrounds: many(usersToGrounds),
}));
