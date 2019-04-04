import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Menu from './menu.entity';

@Entity()
export default class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length: 255,
      nullable: true,
  })
  name: string;

  @Column({
      type: 'float',
      nullable: true,
  })
  price: string;

  @Column({
      length: 255,
      nullable: true,
  })
  picture: string;

  @ManyToOne(type => Menu, menu => menu.dishes)
  menu: Menu;
}
