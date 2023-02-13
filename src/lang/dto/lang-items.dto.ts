import { ILangItem } from '@/lang/interfaces/ILangItem';
export class LangItemsDto {
  items: {
    [name: number]: ILangItem;
  };
}
