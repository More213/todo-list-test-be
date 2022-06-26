import { ObjectId } from "mongodb";
import {CreateToDoDTO} from '../../todo/dto/create-todo.dto';

export class CreateCategoryDTO {
    readonly _id: ObjectId;
    readonly title: String;
    atCreated?: String;
    todos: CreateToDoDTO[];
}