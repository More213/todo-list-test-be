import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateToDoDTO from './dto/create-todo.dto';
import { Todo } from './interface/toDo.interface';

@Injectable()
export class ToDoService {
    constructor(
        @InjectModel('Todo')
        private readonly toDoModel: Model<Todo>,) {
    }

    async addNewTodo(categoryId, createTodo: CreateToDoDTO): Promise<any> {
        // console.log(categoryId)
        const newTodo = await new this.toDoModel(createTodo).save()
        return newTodo
    }
}
