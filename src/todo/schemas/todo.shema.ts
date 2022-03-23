import * as mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export const CategorySchema = new mongoose.Schema({
    id: ObjectId,
    title: String,
    todos: [{
        id: ObjectId,
        text: String,
        isCompleted: Boolean
    }]
})
