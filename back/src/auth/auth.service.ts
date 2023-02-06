import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import ms from 'ms';
import { UsersService } from 'src/users/users.service';
import { PasswordHashingService } from './password-hashing.service';

type AccessToken = {
  access_token: string;
  expires_in: number;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    private readonly passwordHashing: PasswordHashingService,
  ) {}

  async login(username: string, password: string): Promise<AccessToken | null> {
    const user = await this.usersService.findOne(username);
    if (user && (await this.passwordHashing.verify(user.password, password))) {
      return {
        access_token: this.jwtService.sign(user),
        expires_in: ms(this.config.get<string>('JWT_EXPIRES_IN')) / 1000, // in seconds
      };
    }

    return null;
  }
}
