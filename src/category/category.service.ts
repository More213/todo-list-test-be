import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Date, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { ObjectId } from 'mongodb';
import { ICheckedTodoDTO } from '../todo/dto/create-todo.dto';
import * as moment from "moment";
import { resolve } from 'dns/promises';


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
    const dateCreate = moment(new Date()).format('YYYY-MM-DDThh:mm:ss.msZ')
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
    return await newCategory.save()
    .then(async () => {
      return await this.faindLastUpdate(dateCreate)
    })
    }

  async addNewTodo(category: CreateCategoryDTO): Promise<any>  {
    const dateCreate = moment(new Date()).format('YYYY-MM-DDThh:mm:ss.msZ')
    const findCategoryById = await this.categoryModel.findById(category._id)
    const newTodo = {
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted,
        atUpdate: dateCreate
    }
    findCategoryById.todos.push(newTodo)

     return findCategoryById.save()
      .then(() => {
      return this.findLastTodo(category._id, dateCreate)
      })
  


  }

  async checkUpdateTodo(todo: ICheckedTodoDTO): Promise<any> {
    const updateTodo = await this.categoryModel
      .findOneAndUpdate({
        _id: todo.categoryId ,
        'todos._id': todo.todoId} ,
        { $set: {'todos.$.isCompleted': todo.isCompleted }})
      if(updateTodo){
        updateTodo.update()
        return {
          categoryId: todo.categoryId,
          todoId: todo.todoId,
          isCompleted: todo.isCompleted
        }
      }
  }

  async faindLastUpdate(date: string): Promise<any> {
    const category = await this.categoryModel.find().lean();
    const mapCategory = category.map((date: any) => {
      return {
        ...date,
        atCreated: moment(date.atCreated, 'YYYY-MM-DDThh:mm:ss.sssZ')}
    })
    return mapCategory.find((el: any) =>moment(el.atCreated).format('YYYY-MM-DDThh:mm:ss.msZ') === date)

  }

  async findLastTodo(categoryId: string, date: string): Promise<any> {
    const category = await this.categoryModel.findOne({_id: categoryId}).lean()
    const lastCreatedCategory = category.todos.find((el: any) => moment(el.atUpdate).format('YYYY-MM-DDThh:mm:ss.msZ') === moment(date).format('YYYY-MM-DDThh:mm:ss.msZ')) 
      return {...lastCreatedCategory, categoryId: categoryId}
  }
}
