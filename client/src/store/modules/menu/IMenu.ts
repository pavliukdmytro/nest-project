import { ILink } from '@/interfaces/ILink';

export interface IMenu {
  items: {
    [name: number]: ILink;
  };
}
