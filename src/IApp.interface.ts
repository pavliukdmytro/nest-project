import { ILangItem } from '@/lang/interfaces/ILangItem';
import { IObject } from '@/interfaces/IObject';
import { ILink } from '@/interfaces/ILink';

export interface IMenuItem extends ILink {
  active: boolean;
}
export interface IMenu {
  items: Array<IMenuItem>;
}

export interface ICookiesAccept {
  text: string;
  agree: string;
  disagree: string;
}

export interface ICommonData {
  lang: {
    items: {
      [name: number]: ILangItem;
    };
  };
  mainPageLink: ILink;
  messages: IObject;

  menu: IMenu;
  cookiesAccept: ICookiesAccept;
  args: {
    lang: string;
  };
}
