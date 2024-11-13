import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  id: string;

  @Type(() => String)
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
