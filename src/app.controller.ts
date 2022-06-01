import { Controller, Get, Res, Post, Body, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category/category.service'
import { CreateCategoryDTO } from './category/dto/create-category.dto'
import { Category } from './category/interfaces/category.interface';
import { ICheckedTodo } from './todo/interface/todo.interface';

@Controller()
export class AppController {
  constructor(
    private readonly categoryService: CategoryService
    ) {}

  @Get('/getCategories')
  getCategory(): Promise<Category[]> {
    return this.categoryService.getAllTodos();

  }

  @Post('/post')
  addCategory(@Res() res, 
  @Body() body: CreateCategoryDTO): any {
    const newCategory = this.categoryService.addNewCategoty(body);

    return res.status(HttpStatus.OK).json({
      message: "Post has been submitted successfully!",
      post: newCategory
  })
  }

  @Post('/postTodo')
  addTodo(@Res() res, 
  @Body() body: CreateCategoryDTO): any {
    const newCategory = this.categoryService.addNewTodo(body);

    return res.status(HttpStatus.OK).json({
      message: "Post has been submitted successfully!",
      post: newCategory
  })
  }

  @Post('/checkTodo')
  updateCatgory(@Res() res,
  @Body() body: ICheckedTodo): any {
    const updateToDo = this.categoryService.checkUpdateTodo(body);
    
    return res.status(HttpStatus.OK).json({
      message: "Post has been submitted successfully!",
  })
  }
}
