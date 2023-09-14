import Config from "drizzle-orm";

export default {
  schema: "./src/database/schemas/*",
  out: "./src/database/migrations",
} satisfies Config;
