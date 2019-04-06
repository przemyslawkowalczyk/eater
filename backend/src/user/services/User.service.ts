import { Injectable } from '@nestjs/common';
import User from '../entity/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findOneByToken(authToken: string): Promise<User> {
        return this.userRepository.findOne({ where: { authToken } });
    }
}
