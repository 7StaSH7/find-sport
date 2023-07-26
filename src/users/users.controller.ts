import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  @ApiResponse({
    status: 200,
  })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':userId')
  @ApiResponse({
    status: 200,
  })
  async findOne(@Param('userId') userId: string): Promise<User | undefined> {
    return await this.usersService.findOne(userId);
  }

  @Post('')
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Patch(':userId')
  async update(
    @Param() userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.usersService.update(userId, updateUserDto);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string): Promise<void> {
    return await this.usersService.delete(userId);
  }
}
