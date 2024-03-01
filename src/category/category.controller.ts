import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CategoryDto, CreateCategoryDto, PatchCategoryDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('category')
@UseGuards(AuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOkResponse({
    type: CategoryDto,
  })
  async create(
    @Body() body: CreateCategoryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<CategoryDto> {
    return this.categoryService.createCategory(body, session.id);
  }

  @Delete()
  @ApiOkResponse()
  async remove(
    @Param('id') id: string,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<CategoryDto> {
    return this.categoryService.removeCategory(id, session.id);
  }

  @Patch()
  @ApiOkResponse({
    type: CategoryDto,
  })
  async patch(
    @Body() body: PatchCategoryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<CategoryDto> {
    return this.categoryService.patchCategory(body, session.id);
  }

  @Get(':id')
  @ApiOkResponse({
    type: CategoryDto,
  })
  async getOne(@Param('id') id: string): Promise<CategoryDto> {
    return this.categoryService.findOne(id);
  }

  @Get('')
  @ApiOkResponse({
    type: [CategoryDto],
  })
  async getAll(
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<CategoryDto[]> {
    return this.categoryService.findAll(session.id);
  }
}
