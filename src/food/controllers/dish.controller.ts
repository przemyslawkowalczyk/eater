import { Controller, Get, Post, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { DishService } from '../services/dish.service';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get('/all')
  async getDetails(@Param('id') id): Promise<object> {
    return await this.dishService.getAll();
  }

  @Get(':id')
  getAll(@Param('id') id: string): Promise<object> {
    return this.dishService.get({ id });
  }

  @Post()
  async create(@Res() res: Response, @Body() dish: { name: string, price: number }): Promise<void> {
    await this.dishService.create(dish);
    res.status(HttpStatus.OK).send();
  }
}
