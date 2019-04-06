import { Module } from '@nestjs/common';
import FoodModule from './food/food.module';
import UserModule from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FoodModule,
      UserModule,
    TypeOrmModule.forRoot(),

  ],
})
export class AppModule {}
