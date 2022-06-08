import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoSchema } from './schemas/todo.schema';



@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Todo', schema: ToDoSchema }])
    ],
    controllers: [],
    providers: [],
    exports: []
  })
  export class ToDoModule {}
  