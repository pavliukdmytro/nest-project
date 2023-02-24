import {
  Controller,
  Get,
  Render,
  Req,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from '@/interfaces/IRequest';
import { AuthenticatedGuard } from '@/auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  @Redirect('/ua/')
  redirect() {}

  @Get('/:lang/')
  @Render('index')
  async root(@Req() req: IRequest) {
    console.log(req.user);
    return await this.appService.getCommonData(req, 'index');
  }

  @Get('/:lang/not-found')
  @Render('404')
  async notFound(@Req() req: IRequest) {
    return await this.appService.getCommonData(req, '404');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/:lang/protected')
  async protected() {
    return 'hello protected route!!';
  }
}
