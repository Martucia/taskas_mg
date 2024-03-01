import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { DbModule } from 'src/db/db.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [DbModule, CategoryModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
