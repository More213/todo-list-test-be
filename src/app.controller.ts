import { Controller, Get, Res, Post, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoryService } from './category/category.service'
import { CreateCategoryDTO } from './category/dto/create-category.dto'
import { CreateToDoDTO } from './todo/dto/create-ToDo.dto'; 


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly categoryService: CategoryService
    ) {}

  @Get()
  getHello(): any {
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
}
