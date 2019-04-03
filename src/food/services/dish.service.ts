import { Injectable } from '@nestjs/common';
import Dish from '../models/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export default class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async get(criteria: object): Promise<Dish> {
    return this.dishRepository.findOne(criteria);
  }

  async getAll(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  async create(data): Promise<Dish> {
    return this.dishRepository.save(data);
  }

  async update(dish): Promise<Dish> {
    return this.dishRepository.save(dish);
  }

  async delete(id): Promise<DeleteResult> {
    return this.dishRepository.delete(id);
  }
}
