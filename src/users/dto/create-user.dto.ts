import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ required: true })
  fullName!: string;

  @IsString()
  @ApiProperty({ required: true })
  nickname!: string;
}
