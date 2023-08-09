import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class FieldsForFind {
  @ValidateIf((obj) => !obj.fullName)
  @IsString()
  nickname: string;

  @ValidateIf((obj) => !obj.nickname)
  @IsString()
  fullName: string;
}
