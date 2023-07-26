import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '@src/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(PG_CONNECTION) private readonly database: NodePgDatabase,
  ) {}

  runMigration() {
    migrate(this.database, { migrationsFolder: 'src/database/migrations' })
      .then(() => {
        console.log('Migrations complete!');
        process.exit(0);
      })
      .catch((err) => {
        console.error('Migrations failed!', err);
      });
  }
}
