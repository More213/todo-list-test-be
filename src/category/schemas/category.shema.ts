import * as mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export const CategorySchema = new mongoose.Schema({
    _id: ObjectId,
    title: String,
    atCreated: Date,
    todos: [{
        text: String,
        isCompleted: Boolean,
        atUpdate: Date
}]
})
