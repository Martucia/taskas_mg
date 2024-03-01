import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  iconPath: string;

  @ApiProperty()
  ownerId: string;
}

export class CreateCategoryDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    iconPath: string;
}

export class PatchCategoryDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    iconPath?: string;
}

export class TaskDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  iconPath: string;

  @ApiProperty()
  ownerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  status: boolean;
}
