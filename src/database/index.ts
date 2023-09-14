import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@database/schemas/index";

const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
