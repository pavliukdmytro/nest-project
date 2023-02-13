import { Injectable } from '@nestjs/common';
import { LangItemsDto } from './dto/lang-items.dto';
import { IRequest } from '@/interfaces/IRequest';

@Injectable()
export class LangService {
  getItems(req: IRequest): LangItemsDto {
    const { path, i18nLang } = req;
    console.log(req);
    return {
      items: [
        {
          name: 'ua',
          link: `${path}`,
        },
        {
          name: 'en',
          link: `${path}?lang=en`,
        },
      ].map((el) => {
        if (el.name === i18nLang) {
          return {
            ...el,
            active: true,
          };
        }
        return el;
      }),
    };
  }
}
