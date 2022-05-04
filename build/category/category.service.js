"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async getAllTodos() {
        const category = await this.categoryModel.find().exec();
        return category;
    }
    async addNewCategoty(category) {
        const newCategory = await new this.categoryModel({
            _id: category._id,
            title: category.title,
            todos: [{
                    text: category.todos[0].text,
                    isCompleted: category.todos[0].isCompleted
                }]
        });
        newCategory.save();
    }
    async addNewTodo(category) {
        const newTodo = await this.categoryModel.findById(category._id);
        newTodo.todos.push(category.todos[0]);
        newTodo.save();
    }
    async checkUpdateTodo(todo) {
        const updateTodo = await this.categoryModel
            .findOneAndUpdate({
            _id: todo.categoryId,
            'todos._id': todo.todoId
        }, { $set: { 'todos.$.isCompleted': todo.isComplete } });
        updateTodo.save();
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Category')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map