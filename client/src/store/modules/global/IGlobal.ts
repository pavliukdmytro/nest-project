import { IObject } from '@/interfaces/IObject';
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

interface IData {
  mainPageLink?: ILink;
}
export interface IGlobal {
  screenWidth: number;
  loader: boolean;
  defModal: IModal;

  data: IData;
}
