import { relations } from "drizzle-orm";
import { index, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { roleEnum, rolesTable } from "./roles";
import { usersToGrounds } from "./usersToGrounds";

export const usersTable = pgTable(
  "users",
  {
    uuid: uuid("uuid").defaultRandom().primaryKey(),
    nickname: varchar("nickname", { length: 50 }).notNull().unique(),
    email: varchar("email", { length: 50 }).notNull().unique(),
    name: varchar("name", { length: 30 }).notNull(),
    surname: varchar("surname", { length: 50 }).notNull(),
    patronymic: varchar("patronymic", { length: 50 }).notNull(),
    password: varchar("password_hash").notNull(),
    role: roleEnum("role"),
    accessToken: varchar("access_token"),
    refreshToken: varchar("refresh_token"),
  },
  (table) => ({
    nicknameIdx: index("nickname_idx").on(table.nickname),
  })
);

export const usersRelations = relations(usersTable, ({ many, one }) => ({
  usersToGrounds: many(usersToGrounds),
  role: one(rolesTable, {
    fields: [usersTable.role],
    references: [rolesTable.role],
  }),
}));
