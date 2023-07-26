import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DatabaseService } from './database.service';

const runMigration = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);

  const databaseService = app.get(DatabaseService);

  databaseService.runMigration();

  await app.close();
};

runMigration();
