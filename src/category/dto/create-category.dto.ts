import { ObjectId } from "mongodb";
import {CreateToDoDTO} from '../../todo/dto/create-todo.dto';

export class CreateCategoryDTO {
    readonly _id: string;
    readonly title: string;
    atCreated?: string;
    todos: CreateToDoDTO[];
}