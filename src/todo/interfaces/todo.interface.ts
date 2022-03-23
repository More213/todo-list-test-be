import { Document } from 'mongoose';

export interface Todo extends Document{
    readonly id: string,
    readonly title: String,
    readonly todos: [{
        readonly id: string,
        readonly text: String,
        readonly isCompleted: Boolean
    }]
}