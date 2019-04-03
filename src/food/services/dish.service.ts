import { Injectable } from '@nestjs/common';
import { Dish } from '../models/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async get(criteria: object): Promise<Dish> {
    return await this.dishRepository.findOne(criteria);
  }

  async getAll(): Promise<Dish[]> {
    return await this.dishRepository.find();
  }

  async create(data): Promise<Dish[]> {
    return await this.dishRepository.create(data);
  }

  async update(dish): Promise<Dish> {
    return await this.dishRepository.save(dish);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.dishRepository.delete(id);
  }
}
