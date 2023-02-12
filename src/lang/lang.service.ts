import { Injectable } from '@nestjs/common';
import { LangItemsDto } from './dto/lang-items.dto';

@Injectable()
export class LangService {
  getItems(): LangItemsDto {
    return [
      {
        name: 'ua',
      },
      {
        name: 'en',
      },
    ];
  }
}
