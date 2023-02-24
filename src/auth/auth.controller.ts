import {
  Controller,
  UseGuards,
  Post,
  Req,
  Body,
  UseInterceptors,
  InternalServerErrorException,
} from '@nestjs/common';
import { LocalAuthGuard } from '@/auth/local-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from '@/auth/auth.service';
import { CreateUserDto } from '@/auth/auth.dto';
import { AuthenticatedGuard } from '@/auth/authenticated.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseInterceptors(FileInterceptor(''))
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Post('logout')
  async logout(@Req() request: Request) {
    const logoutError = await new Promise((resolve) =>
      request.logOut({ keepSessionInfo: false }, (error) => resolve(error)),
    );

    if (logoutError) {
      console.error(logoutError);

      throw new InternalServerErrorException('Could not log out user');
    }

    return {
      logout: true,
    };
  }

  @Post('signup')
  @UseInterceptors(FileInterceptor(''))
  async registration(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registration(createUserDto);
  }
}
