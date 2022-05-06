import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ToDoModule } from './todo/toDo.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'build', 'todo-list-test-fe'),
    }),
    CategoryModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
