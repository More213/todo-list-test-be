import { Controller, Get, Res, Post, Body, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category/category.service'
import { CreateCategoryDTO } from './category/dto/create-category.dto'
import { Category } from './category/interfaces/category.interface';
import { ICheckedTodoDTO } from './todo/dto/create-todo.dto';
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
  @Body() body: CreateCategoryDTO): Promise<any> {
   return this.categoryService.addNewCategoty(body)
    .then((cat) => {
      return res.status(HttpStatus.OK).json(cat)
    })
    .catch((error) => console.log(error))
  }

  @Post('/postTodo')
  addTodo(@Res() res, 
  @Body() body: CreateCategoryDTO): Promise<any> {
    return this.categoryService.addNewTodo(body)
    .then((cat) => {
      console.log(cat)
      return res.status(HttpStatus.OK).json(cat)
    })
    .catch((error) => console.log(error))
  }

  @Post('/checkTodo')
  updateCatgory(@Res() res,
  @Body() body: ICheckedTodoDTO): any {
    const updateToDo = this.categoryService.checkUpdateTodo(body);
    
    return res.status(HttpStatus.OK).json({
      message: "Post has been submitted successfully!",
  })
  }
}
