import { Module } from '@nestjs/common';
import { DishController } from './controllers/dish.controller';
import DishService from './services/dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Dish from './models/dish.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Dish,
    ]),
  ],
  controllers: [
    DishController,
  ],
  providers: [
    DishService,
  ],
  exports: [
    FoodModule,
  ],
})
export default class FoodModule {}
