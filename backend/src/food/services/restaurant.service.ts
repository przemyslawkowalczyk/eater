import { Injectable } from '@nestjs/common';
import Restaurant from '../models/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export default class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurantRepository: Repository<Restaurant>,
    ) {}

    async get(criteria: object): Promise<Restaurant> {
        return this.restaurantRepository.findOne(criteria, { relations: ['menus', 'menus.dishes'] });
    }

    async getAll(): Promise<Restaurant[]> {
        return this.restaurantRepository.find({ relations: ['menus']});
    }

    async create(data): Promise<Restaurant> {
        return this.restaurantRepository.save(data);
    }

    async update(restaurant): Promise<Restaurant> {
        return this.restaurantRepository.save(restaurant);
    }

    async delete(id): Promise<DeleteResult> {
        return this.restaurantRepository.delete(id);
    }
}
