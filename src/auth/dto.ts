import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignUpAccountDataBodyDto {
  @ApiProperty()
  @IsNotEmpty()
  userName: string;
}

export class SignUpBodyDto {
  @ApiProperty({ required: true, example: 'email@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: '12345' })
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  accountData: SignUpAccountDataBodyDto;
}

export class SignInBodyDto {
  @ApiProperty({ required: true, example: 'email@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: '12345' })
  @IsNotEmpty()
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
