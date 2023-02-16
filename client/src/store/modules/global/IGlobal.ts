import { ILink } from '@/interfaces/ILink';

export interface ILang {
  items: {
    [name: number]: {
      text: string;
      url: string;
      active?: boolean;
    };
  };
}

interface IData {
  mainPageLink?: ILink;
  lang?: ILang;
}
export interface IGlobal {
  data: IData;
}
