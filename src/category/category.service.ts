import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { ICheckedTodo } from 'src/todo/interface/todo.interface';
import { ObjectId } from 'mongodb';


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
    const newId = new ObjectId()
    const newCategory = await new this.categoryModel({
      _id: newId,
      title: category.title,
      todos: [{
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted
      }]
    })
    newCategory.save()
  }

  async addNewTodo(category: CreateCategoryDTO): Promise<void>  {
    const findCategoryById = await this.categoryModel.findById(category._id)
    const newTodo = {
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted
    }
    findCategoryById.todos.push(newTodo)
    findCategoryById.save()
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
