import { Injectable } from '@nestjs/common';
import { LangItemsDto } from './dto/lang-items.dto';
import { IRequest } from '@/interfaces/IRequest';

@Injectable()
export class LangService {
  private replaceLangInUrl(path: string, lang: string): string {
    // console.log(path.replace(/^\/\w\w\/?/, ``));
    if (lang == 'ua') {
      return path.replace(/^\/\w\w\//, `/`);
    }
    if (path.match(/^\/\w\w\//)) {
      return path.replace(/^\/\w\w\//, `/${lang}/`);
    } else {
      return `/${lang}${path}`;
    }
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
