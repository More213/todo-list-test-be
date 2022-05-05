import { ObjectId } from "mongodb";
import CreateToDoDTO from "src/todo/dto/create-ToDo.dto";


export class CreateCategoryDTO {
    readonly _id: ObjectId;
    readonly title: string;
    todos: CreateToDoDTO[];
}