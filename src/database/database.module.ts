import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PG_CONNECTION } from '@src/constants';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DatabaseService } from './database.service';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString,
        });

        return drizzle(pool);
      },
    },
    DatabaseService,
  ],
  exports: [PG_CONNECTION],
})
export class DatabaseModule {}
