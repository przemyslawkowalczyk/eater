import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Menu from './menu.entity';
@Entity()
export default class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('float')
  price: string;

  @Column({ length: 255 })
  picture: string;

  @ManyToOne(type => Menu, menu => menu.dishes)
  menu: Menu;
}
