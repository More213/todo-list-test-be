import { Model } from 'mongoose';
import { CreateToDoDTO } from './dto/create-ToDo.dto';
import { Todo } from './interface/toDo.interface';
export declare class ToDoService {
    private readonly toDoModel;
    constructor(toDoModel: Model<Todo>);
    addNewTodo(categoryId: any, createTodo: CreateToDoDTO): Promise<any>;
}
