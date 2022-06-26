import { Injectable } from '@nestjs/common';
import { Date, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { ObjectId } from 'mongodb';
import { ICheckedTodoDTO } from '../todo/dto/create-todo.dto';
import * as moment from "moment";


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

  async addNewCategoty(category: CreateCategoryDTO): Promise<void> {

    const newId = new ObjectId()
    const dateCreate = moment(new Date()).format('YYYY-MM-DDThh:mm:ss.sssZ')
    const newCategory = await new this.categoryModel({
      _id: newId,
      title: category.title,
      atCreated: dateCreate,
      todos: [{
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted,
        atUpdate: dateCreate 
      }]
    })

    try{
      newCategory.save()
      this.faindLastUpdate()
    } catch(error) {
      console.log('not saved')
    }
  }

  async addNewTodo(category: CreateCategoryDTO): Promise<void>  {
    const dateCreate = moment(new Date()).format('YYYY-MM-DDThh:mm:ss.sssZ')
    const findCategoryById = await this.categoryModel.findById(category._id)
    const newTodo = {
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted,
        atUpdate: dateCreate
    }
    findCategoryById.todos.push(newTodo)
    findCategoryById.save()
  }

  async checkUpdateTodo(todo: ICheckedTodoDTO): Promise<void> {
    const updateTodo = await this.categoryModel
      .findOneAndUpdate({
        _id: todo.categoryId ,
        'todos._id': todo.todoId} ,
        { $set: {'todos.$.isCompleted': todo.isCompleted }})
      if(updateTodo){
        updateTodo.update()
      }
  }

  async faindLastUpdate() {
    const category = await this.categoryModel.find().exec();
    const mapCategory = category.map((date: any) => {
      return moment(date.atCreated, 'YYYY-MM-DDThh:mm:ss.sssZ')
    })
    const lastCategory =  moment.max(mapCategory)
     return category.find((el: any) => {
      moment(el.atCreated).format('YYYY-MM-DDThh:mm:ss.sssZ') === moment(el.lastCategory).format('YYYY-MM-DDThh:mm:ss.sssZ')
    }) 
  }
}
