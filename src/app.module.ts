import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@src/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroundsModule } from './grounds/grounds.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    GroundsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
