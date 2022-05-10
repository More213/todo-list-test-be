import { Todo } from '../../todo/interface/toDo.interface';
export interface Category {
    readonly _id: String;
    readonly title: String;
    todos: Todo[];
}
