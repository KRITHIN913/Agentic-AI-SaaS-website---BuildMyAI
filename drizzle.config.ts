import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

console.log('DATABASE_URL being read is:', process.env.DIRECT_DATABASE_URL);

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // This line MUST point to your DIRECT_DATABASE_URL
    url: process.env.DIRECT_DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});