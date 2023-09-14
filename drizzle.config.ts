import type { Config } from "drizzle-kit";

export default {
  schema: "src/database/schemas/*",
  out: "src/database/migrations",
} satisfies Config;
