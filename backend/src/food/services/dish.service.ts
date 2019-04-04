import { Injectable } from '@nestjs/common';
import Dish from '../models/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import * as _ from 'lodash';
import { log } from 'util';

@Injectable()
export default class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async get(criteria: object): Promise<Dish> {
      return this.dishRepository.findOne({ where: { ...criteria } });
  }

  async getAll(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ['menu', 'menu.restaurant']});
  }

  async create(data): Promise<Dish> {
    const dish = new Dish();
    dish.name = data.name;
    dish.price = data.price;
    dish.picture = data.picture;
    return this.dishRepository.save(dish);
  }

  async update(dish): Promise<Dish> {
      const oldDish = await this.dishRepository.findOne(dish.id);
      return this.dishRepository.save(_.omit(_.merge(oldDish, dish), 'id'));
  }

  async delete(id): Promise<DeleteResult> {
    return this.dishRepository.delete(id);
  }
}
