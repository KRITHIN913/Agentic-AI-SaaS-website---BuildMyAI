// migrate.ts
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db, client } from './lib/db/drizzle';

async function main() {
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: './lib/db/migrations' });
  console.log('Migrations complete!');
  await client.end();
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});