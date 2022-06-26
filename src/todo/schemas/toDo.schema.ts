import * as mongoose from 'mongoose';

export const ToDoSchema = new mongoose.Schema({
        text: String,
        isCompleted: Boolean,
        atUpdate: Date
})
