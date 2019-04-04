import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Dish from './models/dish.entity';
import Restaurant from './models/restaurant.entity';
import Menu from './models/menu.entity';

import DishService from './services/dish.service';
import RestaurantService from './services/restaurant.service';
import MenuService from './services/menu.service';

import { DishController } from './controllers/dish.controller';
import { RestaurantController } from './controllers/restaurant.controller';
import { MenuController } from './controllers/menu.controller';

import ParseIntPipe from '../pipes/Parse-int.pipe';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Dish,
        Restaurant,
        Menu,
    ]),
  ],
  controllers: [
    DishController,
      RestaurantController,
      MenuController,
  ],
  providers: [
    RestaurantService,
    DishService,
      MenuService,
      ParseIntPipe,
  ],
  exports: [
    FoodModule,
  ],
})
export default class FoodModule {}
