import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { AppService } from '@/app.service';
import { LangService } from '@/lang/lang.service';

@Module({
  providers: [CatalogService, AppService, LangService],
  controllers: [CatalogController],
})
export class CatalogModule {}
