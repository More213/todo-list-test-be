import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schemas/category.shema';
import { CategoryService } from './category.service';
import { ToDoModule } from '../todo/todo.module'
import { ToDoSchema } from 'src/todo/schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Category', schema: CategorySchema },
      { name: 'Todo', schema: ToDoSchema }
    ]),
    ToDoModule
  ],
  controllers: [],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
