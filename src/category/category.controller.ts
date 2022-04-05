import { Controller, Get, HttpStatus,HttpException  } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Request } from 'express';


@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getHello(): any {
    return this.categoryService.getAllTodos();
  }
}
