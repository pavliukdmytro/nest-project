import { IGlobal } from '@/store/modules/global/IGlobal';
import { IMenuState } from '@/store/modules/menu/menu';

export interface IState {
  global?: IGlobal;
  menu?: IMenuState;
}
