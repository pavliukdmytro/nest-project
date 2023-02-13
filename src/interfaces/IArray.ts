import { IObject } from '@/interfaces/IObject';
export interface IArray {
  [name: number]: number | string | IArray | IObject;
}
