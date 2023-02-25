import {
  Controller,
  UseGuards,
  Post,
  Req,
  Body,
  UseInterceptors,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { LocalAuthGuard } from '@/auth/local-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from '@/auth/auth.service';
import { CreateUserDto } from '@/auth/auth.dto';
import { AuthenticatedGuard } from '@/auth/authenticated.guard';
import { Request } from 'express';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller(':lang/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async getLoginData(@I18n() i18n: I18nContext) {
    return i18n.t('auth.login');
  }

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

  @Get('register')
  async getRegisterData(@I18n() i18n: I18nContext) {
    return i18n.t('auth.register');
  }

  @Post('register')
  @UseInterceptors(FileInterceptor(''))
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registration(createUserDto);
  }
}
