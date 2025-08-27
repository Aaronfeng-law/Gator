import { defineConfig } from "drizzle-kit";
import { readConfig } from "src/config";
export default defineConfig({
  schema: "src/lib/db/schema.ts",
  out: "src/lib/generated",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:@localhost:5432/gator",
    
  },
});