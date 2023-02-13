import { Injectable } from '@nestjs/common';
import { LangService } from '@/lang/lang.service';
import { I18nService } from 'nestjs-i18n';

import { ILangItem } from '@/lang/interfaces/ILangItem';
import { IRequest } from '@/interfaces/IRequest';

interface IObject {
  [name: string]: string | IObject;
}

export interface ICommonData {
  lang: {
    items: {
      [name: number]: ILangItem;
    };
  };
  messages: IObject;
}

@Injectable()
export class AppService {
  constructor(
    private readonly langService: LangService,
    private readonly i18nService: I18nService,
  ) {}
  async getCommonData(req: IRequest): Promise<ICommonData> {
    const messages: IObject = await this.i18nService.t('index', {
      args: { username: 'Dima' },
    });

    return {
      lang: {
        ...this.langService.getItems(req),
      },
      messages,
    };
  }
}
