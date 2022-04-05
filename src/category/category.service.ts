import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Todo } from 'src/todo/interface/toDo.interface';
import { ToDoService } from 'src/todo/toDo.service';
import { Db } from 'mongodb';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<Category>,
    @InjectModel('Todo')
    private readonly todoModel: Model<Todo>,
    private toDoServise: ToDoService
  ) {}

  async getAllTodos(): Promise<Category[]> {
    const category = await this.categoryModel.find().exec();
    console.log(category)
    return category;
}

  async addNewCategoty(category: CreateCategoryDTO): Promise<any> {
    let newTodo
    const newCategory = await new this.categoryModel({
      _id: category._id,
      title: category.title,
      todos: []
    })

    // newCategory.save()
    // newTodo.save().then(() => {
      // newCategory.todos = [newTodo]
      // newCategory.save()
    // })
    newCategory.save().then( async () => {
      newTodo = await new this.todoModel({
        _id:null,
        text: category.todos[0].text,
        isCompleted: category.todos[0].isCompleted
      })
      newTodo.save()
      console.log(newTodo.g)
    }).then((el: any) => {
      // newCategory.todos = [el]
      // newCategory.save()
    })
    // newCategory.todos = [newTodo]
  
    // this.toDoServise.addNewTodo(newCategory.$parent()._id, category.todos[0] )
    // const editedPost = await this.categoryModel.findByIdAndUpdate(newCategory._id, { $set: {todos: newTodo}});
    // console.log(editedPost)
  }
}
