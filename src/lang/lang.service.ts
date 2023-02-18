import { Injectable } from '@nestjs/common';
import { LangItemsDto } from './dto/lang-items.dto';
import { IRequest } from '@/interfaces/IRequest';

@Injectable()
export class LangService {
  private replaceLangInUrl(path: string, lang: string): string {
    return path.replace(/^\/\w\w\/?/, `/${lang}/`);
  }
  getItems(req: IRequest): LangItemsDto {
    const { path, i18nLang } = req;
    return {
      items: [
        {
          text: 'ua',
          url: `${this.replaceLangInUrl(path, 'ua')}`,
          active: i18nLang === 'ua',
        },
        {
          text: 'en',
          url: `${this.replaceLangInUrl(path, 'en')}`,
          active: i18nLang === 'en',
        },
      ],
    };
  }
}
