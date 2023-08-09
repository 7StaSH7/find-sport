import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignUpRequestDto {
  @IsString()
  @ApiProperty({ required: true })
  fullName!: string;

  @IsString()
  @ApiProperty({ required: true })
  nickname!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @ApiProperty({ required: true })
  password!: string;
}
