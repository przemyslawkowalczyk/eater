import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import DishService from '../services/dish.service';
import Dish from '../models/dish.entity';
import CreateDish from '../validators/CreateDish';
import ParseIntPipe from '../../pipes/Parse-int.pipe';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get('/all')
  async getDetails(@Param('id') id): Promise<Dish[]> {
    return this.dishService.getAll();
  }

  @Get('/:id')
  getAll(@Param('id', new ParseIntPipe()) id: number): Promise<Dish> {
    return this.dishService.get({ id });
  }

  @Post()
  async create(@Body() dish: CreateDish) {
    return this.dishService.create(dish);
  }

  @Put()
  async edit(@Body() dish) {
    return this.dishService.update(dish);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.dishService.delete(+id);
  }
}
