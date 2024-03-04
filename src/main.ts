import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

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
  app.use(cors());

  // app.enableCors({
  //   origin: [
  //     'https://taskas-mg.vercel.app',
  //     'chrome-extension://jcmfnmkpolncpgmjlhlknajklonbkcdc',
  //   ],
  //   credentials: true,
  // });

  // {
  //   origin: '*',
  //   credentials: true,
  // }

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
