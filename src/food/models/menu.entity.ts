import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import Dish from './dish.entity';
import Restaurant from './restaurant.entity';

@Entity()
export default class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255})
  name: string;

  @OneToMany(type => Dish, dish => dish.menu)
  dishes: Dish[];

  @ManyToOne(type => Restaurant, restaurant => restaurant.menus)
  restaurant: Restaurant;
}
