import { IGlobal } from '@/store/modules/global/IGlobal';
import { IObject } from '@/interfaces/IObject';

export default {
  state: () => ({
    loader: false,
  }),
  mutations: {
    'setState/global': (state: IGlobal, payload: IObject) => {
      // eslint-disable-next-line no-param-reassign
      state.data = {
        ...state.data,
        ...payload,
      };
    },
    /**
     * @param {string|object} payload - parent selector for preloader default: document.querySelector('body').
     */
    'global/loaderStart': (state: IGlobal) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = true;
    },
    'global/loaderStop': (state: IGlobal) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = false;
    },
  },
};
