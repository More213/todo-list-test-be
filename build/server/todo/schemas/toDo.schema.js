"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoSchema = void 0;
const mongoose = require("mongoose");
exports.ToDoSchema = new mongoose.Schema({
    text: String,
    isCompleted: Boolean
});
//# sourceMappingURL=toDo.schema.js.map