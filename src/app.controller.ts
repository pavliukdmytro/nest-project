import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!', title: 'index Title' };
  }

  @Get('/test')
  @Render('test')
  test() {
    return { message: 'Hello world!', title: 'test Title' };
  }
}
