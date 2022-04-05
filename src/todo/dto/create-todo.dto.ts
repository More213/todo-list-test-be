import { ObjectId } from "mongodb";

export class CreateToDoDTO {
        readonly _id: ObjectId;
        readonly text: String;
        isCompleted: Boolean
}
