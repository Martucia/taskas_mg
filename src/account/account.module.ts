import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { DbModule } from 'src/db/db.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [DbModule, FileModule],
  providers: [AccountService],
  controllers: [AccountController],
  exports: [AccountService]
})
export class AccountModule {}
