import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '@src/constants';
import { usersTable } from '@src/database/schemas/users';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PG_CONNECTION) private readonly database: NodePgDatabase,
  ) {}

  async findAll(): Promise<User[]> {
    const result: User[] = await this.database.select().from(usersTable);
    return result;
  }

  async findOne(userId: string): Promise<User> {
    const users: User[] = await this.database
      .select()
      .from(usersTable)
      .where(eq(usersTable.uuid, userId));

    if (!users[0]) {
      throw new HttpException('user.not-found', HttpStatus.NOT_FOUND);
    }

    return users[0];
  }

  async create(user: CreateUserDto): Promise<User> {
    const result = await this.database
      .insert(usersTable)
      .values(user)
      .returning();

    return result[0];
  }

  async update(userId: string, user: UpdateUserDto): Promise<User> {
    const updatedUsers = await this.database
      .update(usersTable)
      .set(user)
      .where(eq(usersTable.uuid, userId))
      .returning();

    return updatedUsers[0];
  }

  async delete(userId: string): Promise<void> {
    await this.database.delete(usersTable).where(eq(usersTable.uuid, userId));
  }
}
