import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', 'https://taskas-mg.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  }
}