import { Controller, Render, Get, Req } from '@nestjs/common';
import { AppService } from '@/app.service';

@Controller(':lang?/catalog')
export class CatalogController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  @Render('catalog')
  getPage(@Req() req) {
    return this.appService.getCommonData(req, 'catalog');
  }
}
