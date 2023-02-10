import { IVue } from './Vue/IVue';
import { IStore } from './Store/IStore';
import { IApp } from './IApp';
import Vue from './Vue/Vue';
import Store from './Store/Store';

class App implements IApp {
  vue: IVue;

  store: IStore;

  constructor(vue: IVue, store: IStore) {
    this.vue = vue;
    this.store = store;

    this.main();
  }

  handlerWindowResize() {
    window.addEventListener('resize', () => {
      this.store.commit('global/changeScreenWidth');
    });
  }

  main(): void {
    this.handlerWindowResize();
  }
}

export default new App(Vue, Store);
