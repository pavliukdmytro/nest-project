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
  getUrl(url: string, lang): string {
    if (lang === 'ua') return url;
    return url + `?lang=${lang}`;
  }
  async getTranslateData(
    lang: string,
    fileName: string,
    args?: IObject,
  ): Promise<any> {
    const data = await this.i18nService.t(fileName, {
      args: {
        lang: this.getUrl('', lang),
        ...args,
      },
      lang,
    });
    return data;
  }

  async getCommonData(req: IRequest, pageName: string): Promise<ICommonData> {
    const { i18nLang } = req;
    const messages: IObject = await this.getTranslateData(i18nLang, pageName, {
      username: 'Dima',
    });

    const menu: IMenu = await this.getTranslateData(i18nLang, 'menu');

    return {
      lang: {
        ...this.langService.getItems(req),
      },
      mainPageLink: {
        url: this.getUrl('/', i18nLang),
        text: '',
      },
      menu,
      messages,
    };
  }
}
