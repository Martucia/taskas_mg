import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { DbService } from 'src/db/db.service';
import { CreateTaskBodyDto, PatchTaskBodyDto } from './dto';

@Injectable()
export class TasksService {
  constructor(
    private db: DbService,
    private categoryService: CategoryService,
  ) {}

  async createTask(data: CreateTaskBodyDto) {
    return this.db.task.create({
      data: { ...data, ownerId: data.ownerId },
    });
  }

  async patchTask(data: PatchTaskBodyDto) {
    const { id, ...patchData } = data;

    return this.db.task.update({
      where: {
        id,
      },
      data: patchData,
    });
  }

  async getAll(categoryId: string, userId: string) {
    const category = await this.categoryService.findOne(categoryId);

    if (userId !== category.ownerId) {
      throw new Error('Not found category');
    }

    return this.db.task.findMany({
      where: {
        ownerId: categoryId,
      },
    });
  }

  async removeTask(id: string) {
    return this.db.task.delete({
      where: { id },
    });
  }
}
