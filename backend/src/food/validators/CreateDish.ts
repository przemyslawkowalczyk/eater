import { IsNotEmpty, IsNumber } from 'class-validator';

export default class CreateDish {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
