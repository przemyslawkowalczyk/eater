import { Controller, Get, Post, Param, Body, Delete, Put} from '@nestjs/common';
import RestaurantService from '../services/restaurant.service';
import Restaurant from '../models/restaurant.entity';
import CreateDish from '../validators/CreateDish';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Get('/all')
    async getDetails(@Param('id') id): Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }

    @Get('/:id')
    getAll(@Param('id') id: string): Promise<Restaurant> {
        return this.restaurantService.get({ id });
    }

    @Post()
    async create(@Body() dish: CreateDish) {
        return this.restaurantService.create(dish);
    }

    @Put()
    async update(@Body() dish: CreateDish) {
        return this.restaurantService.update(dish);
    }

    @Delete('/:id')
    async remove(@Param('id') id: string | number) {
        return this.restaurantService.delete(+id);
    }
}
