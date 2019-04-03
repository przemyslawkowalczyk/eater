import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import DishService from '../services/dish.service';
import Dish from '../models/dish.entity';
import CreateDish from '../validators/CreateDish';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get('/all')
  async getDetails(@Param('id') id): Promise<Dish[]> {
    return this.dishService.getAll();
  }

  @Get(':id')
  getAll(@Param('id') id: string): Promise<Dish> {
    return this.dishService.get({ id });
  }

  @Post()
  async create(@Body() dish: CreateDish) {
    return this.dishService.create(dish);
  }
}
