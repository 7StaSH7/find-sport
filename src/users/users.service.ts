import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Database } from '@src/database/database.type';
import { usersTable } from '@src/database/schemas/users';
import { eq } from 'drizzle-orm';
import { PG_CONNECTION } from 'src/constants';
import { FieldsForFind } from './dto/find-fields.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private readonly database: Database) {}

  async findAll(): Promise<User[]> {
    const result = await this.database.query.usersTable.findMany();
    return result;
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.database.query.usersTable.findFirst({
      where: (users, { eq }) => eq(users.uuid, userId),
    });

    if (!user) {
      throw new HttpException('user.not-found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findOneByField(field: FieldsForFind): Promise<User> {
    const fieldToFind = Object.keys(field)[0] as keyof FieldsForFind;

    const user = await this.database.query.usersTable.findFirst({
      where: (users, { eq }) => eq(users[fieldToFind], field[fieldToFind]),
    });

    if (!user) {
      throw new HttpException('user.not-found', HttpStatus.NOT_FOUND);
    }

    return user;
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
