import { index, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
  'users',
  {
    uuid: uuid('uuid').defaultRandom().primaryKey(),
    fullName: varchar('full_name', { length: 256 }).notNull(),
    nickname: varchar('nickname', { length: 256 }).notNull(),
    password: varchar('password', { length: 256 }).notNull(),
  },
  (users) => ({
    nicknameIdx: index('nickname_idx').on(users.nickname),
  }),
);
