import { Injectable } from '@nestjs/common';
import { LangService } from '@/lang/lang.service';
import { I18nService } from 'nestjs-i18n';

import { IRequest } from '@/interfaces/IRequest';
import { ICommonData } from '@/IApp.interface';
import { IObject } from '@/interfaces/IObject';
import { ILink } from '@/interfaces/ILink';

interface IMenu {
  items: Array<ILink>;
}

@Injectable()
export class AppService {
  constructor(
    private readonly langService: LangService,
    private readonly i18nService: I18nService,
  ) {}
  async getCommonData(req: IRequest, pageName: string): Promise<ICommonData> {
    const { i18nLang } = req;
    const messages: IObject = await this.i18nService.t(pageName, {
      args: { username: 'Dima' },
      lang: i18nLang,
    });
    const menu: IMenu = await this.i18nService.t('menu', {
      args: {
        lang: i18nLang === 'ua' ? '' : `?lang=${i18nLang}`,
      },
      lang: i18nLang,
    });

    return {
      lang: {
        ...this.langService.getItems(req),
      },
      main: {
        url: `/${i18nLang && '?lang='}${i18nLang}`,
        text: '',
      },
      menu,
      messages,
    };
  }
}
