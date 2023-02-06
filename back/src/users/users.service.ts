import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export type User = {
  id: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly config: ConfigService) {}

  async findOne(username: string): Promise<User | null> {
    if (this.config.get('USERNAME') === username) {
      return {
        id: this.config.get('USER_ID'),
        username: this.config.get('USERNAME'),
        password: this.config.get('PASSWORD'),
      };
    }
    return null;
  }
}
