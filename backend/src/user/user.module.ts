import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../auth/auth.service';
import { HttpStrategy } from '../auth/http.strategy';

import User from './entity/User.entity';

import UserService from './services/User.service';

import { UserController } from './controllers/User.controllers';

import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
        ]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
        AuthService,
        HttpStrategy,
        PassportModule
    ],
    exports: [
        UserModule,
    ],
})
export default class UserModule {}
