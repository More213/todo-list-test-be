import { Document } from 'mongoose';

export interface Todo{
        readonly _id: String,
        readonly text: String,
        isCompleted: Boolean
}