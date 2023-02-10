import { createApp } from 'vue';
import { IVue, IComponents, IComponent } from './IVue';

import store from '../../store';

interface IParams {
  [name: string]: number | string | IParams | boolean;
}

class Vue implements IVue {
  components: IComponents;

  constructor() {
    this.components = {};
  }

  setComponent(component: IComponent) {
    // eslint-disable-next-line no-underscore-dangle
    const name = component?.__name || component?.name;
    if (name) {
      this.components[name] = component;
    }
  }

  createPropsFromAttributes(data: HTMLDivElement): IParams {
    try {
      const { dataset } = data;
      console.dir(dataset);

      const params: IParams = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const key in dataset) {
        // eslint-disable-next-line no-continue
        if (key === 'vue') continue;
        // console.log(key);
        params[key] = JSON.parse(dataset[key] as string);
      }

      return params;
      // return {};
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  main() {
    try {
      const domComponents: Array<HTMLDivElement> = Array.from(
        document.querySelectorAll('[data-vue]')
      );

      domComponents.forEach((el) => {
        const name = el.dataset.vue;
        if (name && name in this.components) {
          const app = createApp(this.components[name], this.createPropsFromAttributes(el));
          app.use(store);

          app.use(require('vue-universal-modal').default, {
            teleportTarget: '#modals',
          });

          app.mount(el);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Vue();
