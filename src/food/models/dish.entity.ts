import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('float')
  price: string;
}
