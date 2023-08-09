import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  emailOrNickname: string;

  @IsString()
  password: string;
}
