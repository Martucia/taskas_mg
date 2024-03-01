import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { SignUpAccountDataBodyDto } from 'src/auth/dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private accountService: AccountService,
  ) {}

  findByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }

  async create(
    email: string,
    hash: string,
    salt: string,
    accountData: SignUpAccountDataBodyDto,
  ) {
    const user = await this.db.user.create({ data: { email, hash, salt } });

    await this.accountService.create({ ...accountData, ownerId: user.id });

    return user;
  }
}
