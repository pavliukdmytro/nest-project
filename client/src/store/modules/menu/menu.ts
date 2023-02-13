import { IMenu } from '@/store/modules/menu/IMenu';

interface IState {
  data: IMenu;
}

export default {
  state: (): IState => ({
    data: {
      items: [{ url: '', text: '' }],
    },
  }),
  mutations: {
    /** change screenWidth * */
    'setState/menu': (state: IState, payload: IMenu) => {
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
    },
  },
};
