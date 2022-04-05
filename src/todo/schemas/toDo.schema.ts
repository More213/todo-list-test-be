import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

export const ToDoSchema = new mongoose.Schema({
        _id: ObjectId,
        text: String,
        isCompleted: Boolean
})
