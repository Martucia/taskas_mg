import { Controller, Get, Param, Res } from '@nestjs/common';
import path from 'path';
import { Response } from 'express';

@Controller('file')
export class FileController {
  @Get(':filename')
  getImage(@Param('filename') filename: string, @Res() res: Response) {
    const imagesPath = path.join(__dirname, '../../images');
    const filePath = path.join(imagesPath, filename);
    res.sendFile(filePath);
  }
}
