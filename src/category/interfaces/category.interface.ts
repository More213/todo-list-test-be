import { Todo } from '../../todo/interface/todo.interface'
export interface Category{
    readonly _id: String,
    readonly title: String,
    atCreated?: Date,

    todos: Todo[]
}