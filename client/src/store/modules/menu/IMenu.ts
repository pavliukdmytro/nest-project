import { ILink } from '@/interfaces/ILink';

interface IMenuItem extends ILink {
  active: boolean;
}

export interface IMenu {
  items: Array<IMenuItem>;
}
