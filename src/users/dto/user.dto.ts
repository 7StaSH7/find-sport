import { InferModel } from 'drizzle-orm';
import { usersTable } from 'src/database/schemas/users';

export type User = InferModel<typeof usersTable>;
