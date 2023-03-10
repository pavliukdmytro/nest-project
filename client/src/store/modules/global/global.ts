import { IGlobal } from '@/store/modules/global/IGlobal';
import { IObject } from '@/interfaces/IObject';

export default {
  state: () => ({}),
  mutations: {
    'setState/global': (state: IGlobal, payload: IObject) => {
      // eslint-disable-next-line no-param-reassign
      state.data = {
        ...state.data,
        ...payload,
      };
    },
  },
};
