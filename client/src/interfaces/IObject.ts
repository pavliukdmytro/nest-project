import { IArray } from '@/interfaces/IArray';

export interface IObject {
  [name: string]: null | number | string | IObject | IArray;
}
