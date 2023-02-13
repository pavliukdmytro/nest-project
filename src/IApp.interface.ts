import { ILangItem } from '@/lang/interfaces/ILangItem';
import { IObject } from '@/interfaces/IObject';
import { ILink } from '@/interfaces/ILink';

export interface ICommonData {
  lang: {
    items: {
      [name: number]: ILangItem;
    };
  };
  main: ILink;
  messages: IObject;

  menu: {
    items: Array<ILink>;
  };
}
