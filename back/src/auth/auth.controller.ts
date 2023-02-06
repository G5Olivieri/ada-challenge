import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.login(
      loginDto.username,
      loginDto.password,
    );
    if (token === null) {
      throw new UnauthorizedException();
    }
    return token;
  }
}
