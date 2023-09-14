import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL,
});

const db = drizzle(pool);

migrate(db, { migrationsFolder: "./src/database/migrations" })
  .then(() => {
    console.log("Migrations done");
    process.exit(0);
  })
  .catch((e) => {
    console.log("Migrations failed", e);
  });
