import { OmitType, PartialType } from '@nestjs/swagger';
import { SignUpRequestDto } from '@src/auth/dto/sign-up.dto';

export class UpdateUserDto extends PartialType(
  OmitType(SignUpRequestDto, ['password', 'email']),
) {}
