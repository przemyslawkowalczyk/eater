import { Controller, Get, UseGuards } from '@nestjs/common';
import UserService from '../services/User.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private readonly dishService: UserService) {
    }

    @Get()
    @UseGuards(AuthGuard('bearer'))
    findAll() {
        return [];
    }
}
