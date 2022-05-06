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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const category_service_1 = require("./category/category.service");
const create_category_dto_1 = require("./category/dto/create-category.dto");
let AppController = class AppController {
    constructor(appService, categoryService) {
        this.appService = appService;
        this.categoryService = categoryService;
    }
    getHello() {
        return this.categoryService.getAllTodos();
    }
    addCategory(res, body) {
        const newCategory = this.categoryService.addNewCategoty(body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newCategory
        });
    }
    addTodo(res, body) {
        const newCategory = this.categoryService.addNewTodo(body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newCategory
        });
    }
    updateCatgory(res, body) {
        const updateToDo = this.categoryService.checkUpdateTodo(body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
        });
    }
};
__decorate([
    (0, common_1.Get)('/getCategories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_category_dto_1.CreateCategoryDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Post)('/postTodo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_category_dto_1.CreateCategoryDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "addTodo", null);
__decorate([
    (0, common_1.Post)('/checkTodo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateCatgory", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        category_service_1.CategoryService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map