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
export interface IState {
  screenWidth: number;
  loader: boolean;
  defModal: IModal;
}
