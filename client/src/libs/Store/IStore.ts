import { StoreOptions } from 'vuex';
import { IState } from '@/store/IState';

interface ICommit {
  (name: string, payload?: any): void;
}
export interface IStore {
  commit: ICommit;
  setState: ICommit;
  getStore: () => StoreOptions<IState>;
}
