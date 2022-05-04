import { Model } from 'mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<Category>);
    getAllTodos(): Promise<Category[]>;
    addNewCategoty(category: CreateCategoryDTO): Promise<any>;
    addNewTodo(category: any): Promise<any>;
    checkUpdateTodo(todo: any): Promise<any>;
}
