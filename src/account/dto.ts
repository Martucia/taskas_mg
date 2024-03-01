import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AccountDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  ownerId: string;
}

export class CreateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  ownerId: string;
}

export class PatchAccountDto {
  @ApiProperty()
  @IsOptional()
  userName: string;
}
