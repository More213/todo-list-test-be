import { ObjectId } from "mongodb";
import CreateToDoDTO from '../../todo/dto/create-todo.dto';
export declare class CreateCategoryDTO {
    readonly _id: ObjectId;
    readonly title: string;
    todos: CreateToDoDTO[];
}
