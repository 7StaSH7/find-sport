import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PG_CONNECTION } from '@src/constants';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DatabaseService } from './database.service';
import * as schema from './schemas';
@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const DATABASE_HOST = configService.get<string>('DATABASE_HOST');
        const DATABASE_USERNAME =
          configService.get<string>('DATABASE_USERNAME');
        const DATABASE_PASSWORD =
          configService.get<string>('DATABASE_PASSWORD');
        const DATABASE_PORT = configService.get<string>('DATABASE_PORT');
        const DATABASE_NAME = configService.get<string>('DATABASE_NAME');

        const connectionString = `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

        const pool = new Pool({
          connectionString,
        });

        return drizzle(pool, { schema });
      },
    },
    DatabaseService,
  ],
  exports: [PG_CONNECTION],
})
export class DatabaseModule {}
