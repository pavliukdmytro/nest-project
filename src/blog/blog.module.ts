import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { AppService } from '@/app.service';
import { LangService } from '@/lang/lang.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService, AppService, LangService],
  imports: [],
})
export class BlogModule {}
