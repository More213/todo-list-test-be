"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
exports.CategorySchema = new mongoose.Schema({
    _id: ObjectId,
    title: String,
    todos: [{
            text: String,
            isCompleted: Boolean
        }]
});
//# sourceMappingURL=category.shema.js.map