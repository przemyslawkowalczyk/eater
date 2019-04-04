import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Menu from './menu.entity';

@Entity()
export default class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length: 255,
      nullable: true,
  })
  name: string;

  @Column({
      length: 255,
      nullable: true,
  })
  logo: string;

  @Column({
      nullable: true,
  })
  latitude: string;

  @Column({
      nullable: true,
  })
  longitude: string;

  @OneToMany(type => Menu, menu => menu.restaurant)
  menus: Menu[];
}
