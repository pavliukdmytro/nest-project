import { Injectable } from '@nestjs/common';
import { LangItemsDto } from './dto/lang-items.dto';
import { IRequest } from '@/interfaces/IRequest';

@Injectable()
export class LangService {
  getItems(req: IRequest): LangItemsDto {
    const { path, i18nLang } = req;

    return {
      items: [
        {
          text: 'ua',
          url: `${path}`,
          active: i18nLang === 'ua',
        },
        {
          text: 'en',
          url: `${path}?lang=en`,
          active: i18nLang === 'en',
        },
      ],
    };
  }
}
