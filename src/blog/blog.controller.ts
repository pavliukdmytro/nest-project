import { Controller, Get, Render, Req } from '@nestjs/common';
import { AppService } from '@/app.service';
import { IRequest } from '@/interfaces/IRequest';

@Controller('/:lang/blog')
export class BlogController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('blog')
  async root(@Req() req: IRequest) {
    return await this.appService.getCommonData(req, 'blog');
  }
}
