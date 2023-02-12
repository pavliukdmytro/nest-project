import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';
import { LangService } from './lang/lang.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly langService: LangService,
  ) {}

  @Get()
  @Render('index')
  async root(@I18n() i18n: I18nContext) {
    const messages = await i18n.t('index');

    return {
      lang: {
        items: this.langService.getItems(),
      },
      messages,
    };
  }
}
