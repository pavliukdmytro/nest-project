import { Controller, Get, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from '@/interfaces/IRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root(@Req() req: IRequest) {
    return await this.appService.getCommonData(req, 'index');
  }

  @Get('not-found')
  @Render('404')
  async notFound(@Req() req: IRequest) {
    const response = await this.appService.getCommonData(req, '404');

    return response;
  }
}
