import { Injectable } from '@nestjs/common';
import { LangService } from '@/lang/lang.service';
import { I18nService } from 'nestjs-i18n';

import { IRequest } from '@/interfaces/IRequest';
import { ICommonData } from '@/IApp.interface';
import { IObject } from '@/interfaces/IObject';
import { IMenu } from '@/IApp.interface';
import { ICookiesAccept } from '@/IApp.interface';

@Injectable()
export class AppService {
  constructor(
    private readonly langService: LangService,
    private readonly i18nService: I18nService,
  ) {}
  getUrl(url: string, lang): string {
    return `/${lang}${url}`;
  }
  async getTranslateData(
    lang: string,
    fileName: string,
    args?: IObject,
  ): Promise<any> {
    const data = await this.i18nService.t(fileName, {
      args: {
        lang: lang,
        ...args,
      },
      lang,
    });
    return data;
  }

  async getMenuData(req: IRequest): Promise<IMenu> {
    const { i18nLang, url } = req;
    const menu: IMenu = await this.getTranslateData(i18nLang, 'menu');
    menu.items = menu.items.map((el) => {
      if (el.url !== url) return el;
      return {
        ...el,
        active: true,
      };
    });
    return menu;
  }

  async getCookiesAccept(req: IRequest): Promise<ICookiesAccept> {
    const { i18nLang } = req;
    return await this.getTranslateData(i18nLang, 'cookiesAccept');
  }

  async getCommonData(req: IRequest, pageName: string): Promise<ICommonData> {
    const { i18nLang } = req;
    const messages: IObject = await this.getTranslateData(i18nLang, pageName, {
      username: 'Dima',
    });

    return {
      lang: {
        ...this.langService.getItems(req),
      },
      mainPageLink: {
        url: this.getUrl('/', i18nLang),
        text: '',
      },
      cookiesAccept: await this.getCookiesAccept(req),
      menu: await this.getMenuData(req),
      messages,
      args: {
        lang: i18nLang,
      },
    };
  }
}
