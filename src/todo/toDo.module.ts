import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoSchema } from './schemas/toDo.schema';
import ToDoController from './toDo.controller';
import { ToDoService } from './toDo.service';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Todo', schema: ToDoSchema }])
    ],
    controllers: [ToDoController],
    providers: [ToDoService],
    exports: [ToDoService]
  })
  export class ToDoModule {}
  