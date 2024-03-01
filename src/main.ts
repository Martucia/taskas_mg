import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Taska Api')
    .setVersion('1.0')
    .addTag('taska')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());

  // const client_url = process.env.CLIENT_URL || '';

  // {
  //   origin: [
  //     'https://taskas.vercel.app/',
  //     'chrome-extension://jcmfnmkpolncpgmjlhlknajklonbkcdc',
  //   ],
  //   credentials: true,
  // }

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
