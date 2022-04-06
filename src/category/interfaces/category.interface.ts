import { Document } from 'mongoose';
import { Todo } from 'src/todo/interface/toDo.interface';

export interface Category{
    readonly _id: String,
    readonly title: String,
    todos: Todo[]
}