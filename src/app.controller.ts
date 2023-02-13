import { Controller, Get, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from '@/interfaces/IRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root(@Req() req: IRequest) {
    const data = await this.appService.getCommonData(req);

    return data;
  }
}
