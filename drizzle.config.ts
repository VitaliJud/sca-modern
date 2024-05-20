import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "sqlite.db",
  },
} satisfies Config;
