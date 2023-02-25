import { ILink } from '@/interfaces/ILink';

export interface ILang {
  items: {
    [name: number]: {
      text: string;
      url: string;
      active?: boolean;
    };
  };
  i18nLang: string;
}

interface IData {
  mainPageLink?: ILink;
  lang?: ILang;
}
export interface IGlobal {
  data: IData;
}
