import { Module } from '@nestjs/common';
import FoodModule from './food/food.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FoodModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
