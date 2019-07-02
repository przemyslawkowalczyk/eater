import { Injectable } from '@nestjs/common';
import Menu from '../models/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export default class MenuService {
    constructor(
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>,
    ) {}

    async get(criteria: object): Promise<Menu> {
        return this.menuRepository.findOne(criteria);
    }

    async getAll(): Promise<Menu[]> {
        return this.menuRepository.find({ relations: ['dishes', 'restaurant']});
    }

    async create(data): Promise<Menu> {
        data.restaurant = +data.restaurantId;
        return this.menuRepository.save(data);
    }

    async update(menu): Promise<Menu> {
        return this.menuRepository.save(menu);
    }

    async delete(id): Promise<DeleteResult> {
        return this.menuRepository.delete(id);
    }
}
