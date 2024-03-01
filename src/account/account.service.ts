import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateAccountDto, PatchAccountDto } from './dto';
import { FileService } from 'src/file/file.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService, private fileService: FileService) {}

  async create(data: CreateAccountDto) {
    const account = await this.db.account.create({
      data,
    });

    return account;
  }

  async getAccount(userId: string) {
    return this.db.account.findUniqueOrThrow({ where: { ownerId: userId } });
  }

  async patchAccount(data: PatchAccountDto, userId: string) {
    return this.db.account.update({
      where: { ownerId: userId },
      data,
    });
  }
}
