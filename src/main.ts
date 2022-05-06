import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 8080;
const app = await NestFactory.create(AppModule);
  // app.use(express.static(path.join(__dirname, 'build/todo-list-test-fe')));
console.log(__dirname)
  await app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
bootstrap();