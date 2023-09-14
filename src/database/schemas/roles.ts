import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user", "guest"]);

export const rolesTable = pgTable("roles", {
  uuid: uuid("uuid").defaultRandom(),
  role: roleEnum("role"),
});
