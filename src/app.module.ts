import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/todo-db'
      , {
      useNewUrlParser: true
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, 'client'),
    // }),
    CategoryModule,
    
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
