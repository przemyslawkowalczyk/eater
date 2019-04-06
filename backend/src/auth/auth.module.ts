import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import UsersModule from '../user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'bearer' }),
        UsersModule,
    ],
    providers: [AuthService, HttpStrategy],
    exports: [AuthModule, PassportModule],
})
export class AuthModule {}
