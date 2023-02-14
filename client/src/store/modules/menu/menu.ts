import { IMenu } from '@/store/modules/menu/IMenu';

export interface IMenuState {
  data: IMenu;
}

export default {
  state: () => ({
    data: {},
  }),
  mutations: {
    /** change screenWidth * */
    'setState/menu': (state: IMenuState, payload: IMenu) => {
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
    },
  },
};
