import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserService } from 'src/users/user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ UserService, PassportLocalStrategy],
})
export class AuthModule {}
