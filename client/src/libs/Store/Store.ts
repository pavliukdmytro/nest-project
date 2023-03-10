import { store } from '../../store';
import { IStore } from './IStore';

class Store implements IStore {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  commit(name: string, payload?: any) {
    store.commit(name, payload);
  }

  setState(name: string, payload: any) {
    store.commit(`setState/${name}`, payload);
  }

  getStore() {
    return store;
  }
}

export default new Store();
