import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo/interfaces/todo.interface';
import { CreateTodoDTO } from './todo/dto/create-todo.dto';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('Todo')
    private readonly todoModel: Model<Todo>
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.find().exec();
    return todos;
}

  getHello(): string {
    return 'Hello World!';
  }
}
