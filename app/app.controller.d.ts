import { AppService } from './app.service';
import { CategoryService } from './category/category.service';
import { CreateCategoryDTO } from './category/dto/create-category.dto';
export declare class AppController {
    private readonly appService;
    private readonly categoryService;
    constructor(appService: AppService, categoryService: CategoryService);
    getHello(): any;
    addCategory(res: any, body: CreateCategoryDTO): any;
    addTodo(res: any, body: CreateCategoryDTO): any;
    updateCatgory(res: any, body: any): any;
}
