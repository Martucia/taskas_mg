import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateTaskBodyDto, PatchTaskBodyDto, TaskDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOkResponse({
    type: TaskDto,
  })
  async create(
    @Body() body: CreateTaskBodyDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<TaskDto> {
    return this.tasksService.createTask(body);
  }

  @Get(':categoryId')
  @ApiOkResponse({
    type: [TaskDto],
  })
  async getAll(
    @Param('categoryId') categoryId: string,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<TaskDto[]> {
    return this.tasksService.getAll(categoryId, session.id);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: TaskDto,
  })
  async remove(@Param('id') id: string): Promise<TaskDto> {
    return this.tasksService.removeTask(id);
  }

  @Patch()
  @ApiOkResponse({
    type: TaskDto,
  })
  async patch(
    @Body() body: PatchTaskBodyDto,
  ): Promise<TaskDto> {
    return this.tasksService.patchTask(body);
  }
}
