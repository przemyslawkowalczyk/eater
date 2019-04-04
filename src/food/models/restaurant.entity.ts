import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Menu from './menu.entity';

@Entity()
export default class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255})
  name: string;

  @Column({ length: 255 })
  logo: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @OneToMany(type => Menu, menu => menu.restaurant)
  menus: Menu[];
}
