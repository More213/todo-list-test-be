import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
const app = await NestFactory.create(AppModule);
  // app.use(express.static(path.join(__dirname, 'build/todo-list-test-fe')));

  app.enableCors()
  await app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
  });
}
bootstrap();