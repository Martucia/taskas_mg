import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { CategoryModule } from './category/category.module';
import { TasksModule } from './tasks/tasks.module';
import { FileModule } from './file/file.module';
import { CorsMiddleware } from './cors.middleware';

@Module({
  imports: [
    DbModule,
    AuthModule,
    UsersModule,
    AccountModule,
    CategoryModule,
    TasksModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
