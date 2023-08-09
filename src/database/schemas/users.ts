import { usersToGrounds } from '@src/database/schemas/usersToGrounds';
import { relations } from 'drizzle-orm';
import { index, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
  'users',
  {
    uuid: uuid('uuid').defaultRandom().primaryKey(),
    fullName: varchar('full_name', { length: 256 }).notNull(),
    nickname: varchar('nickname', { length: 256 }).notNull().unique(),
    password: varchar('password', { length: 256 }).notNull(),
  },
  (users) => ({
    nicknameIdx: index('nickname_idx').on(users.nickname),
  }),
);

export const usersRelations = relations(usersTable, ({ many }) => ({
  usersToGrounds: many(usersToGrounds),
}));
