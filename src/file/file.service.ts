import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  async uploadFile(file: Express.Multer.File) {
    if (!file.originalname) {
      throw new Error('Missing originalname in file details');
    }

    const filename = `${Date.now()}-${file.originalname}`;
    const filePath = join(__dirname, '..', '..', 'images', filename);

    const fileStream = createWriteStream(filePath);
    fileStream.write(file.buffer);

    return filename;
  }
}
