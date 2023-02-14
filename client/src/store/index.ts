import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { IState } from '@/store/IState';
import loader from './plugins/loader';

// define your typings for the store state

const debug = process.env.NODE_ENV !== 'production';

// define injection key
// eslint-disable-next-line symbol-description
export const storeKey: InjectionKey<Store<IState>> = Symbol();

// Create a new index instance.
export const store = createStore<IState>({
  state() {
    return {};
  },
  modules: {
    global: require('./modules/global/global').default,
    menu: require('./modules/menu/menu').default,
  },
  mutations: {},
  plugins: [loader],
  strict: debug,
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(storeKey);
}
