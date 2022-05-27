import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { ICheckedTodo } from 'src/todo/interface/toDo.interface';


@Injectable()
export class CategoryService {

  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<Category>,
  ) {}

  async getAllTodos(): Promise<Category[]> {
    const category = await this.categoryModel.find().exec();
    return category;
}

  async addNewCategoty(category: CreateCategoryDTO): Promise<any> {
    const newCategory = await new this.categoryModel({
      _id: category._id,
      title: category.title,
      todos: [{
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted
      }]
    })
    newCategory.save()
  
  }

  async addNewTodo(category: CreateCategoryDTO): Promise<any> {
    const newTodo = await this.categoryModel.findById(category._id)
    newTodo.todos.push(category.todos[0])
    newTodo.save()
  }

  async checkUpdateTodo(todo: ICheckedTodo): Promise<any> {
    const updateTodo = await this.categoryModel
      .findOneAndUpdate({
        _id: todo.categoryId ,
        'todos._id': todo.todoId} ,
        { $set: {'todos.$.isCompleted': todo.isCompleted }})
      if(updateTodo){
        updateTodo.save()
      }
  }
}
