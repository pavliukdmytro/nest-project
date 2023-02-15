import { ILink } from '@/interfaces/ILink';

export interface IEmptyObject {
  [name: string]: any;
}
export interface IModalData {
  name: string;
  width: string;
  props?: IEmptyObject;
  empty?: boolean;
  padding?: string;
}
export interface IModal {
  isOpen: boolean;
  data?: IModalData;
}
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
  screenWidth: number;
  loader: boolean;
  defModal: IModal;

  data: IData;
}
