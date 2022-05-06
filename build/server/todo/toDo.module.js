"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const toDo_schema_1 = require("./schemas/toDo.schema");
const toDo_controller_1 = require("./toDo.controller");
const toDo_service_1 = require("./toDo.service");
let ToDoModule = class ToDoModule {
};
ToDoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Todo', schema: toDo_schema_1.ToDoSchema }])
        ],
        controllers: [toDo_controller_1.default],
        providers: [toDo_service_1.ToDoService],
        exports: [toDo_service_1.ToDoService]
    })
], ToDoModule);
exports.ToDoModule = ToDoModule;
//# sourceMappingURL=toDo.module.js.map