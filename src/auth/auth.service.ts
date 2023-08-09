import { Injectable } from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpRequestDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(signInDto: SignInDto) {}

  async signUp(signUpDto: SignUpRequestDto) {}
}
