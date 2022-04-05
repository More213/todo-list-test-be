import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ToDoModule } from './todo/toDo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/todo-db', {
      useNewUrlParser: true
    }),
    CategoryModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
