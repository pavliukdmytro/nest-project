import { IState, IModalData } from '@/store/modules/global/IGlobal';

export default {
  state: (): IState => ({
    screenWidth: window.innerWidth,
    loader: false,
    defModal: {
      isOpen: false,
      data: { name: '', width: '' },
    },
  }),
  mutations: {
    /** change screenWidth * */
    'global/changeScreenWidth': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.screenWidth = window.innerWidth;
    },
    /**
     * @param {string|object} payload - parent selector for preloader default: document.querySelector('body').
     */
    'global/loaderStart': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = true;
    },
    'global/loaderStop': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = false;
    },
    /**
     * methods for modals
     * * */
    'global/modalShow': (state: IState, payload: IModalData) => {
      // eslint-disable-next-line no-param-reassign
      state.defModal = {
        isOpen: true,
        data: { ...payload },
      };
    },
    'global/modalHide': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.defModal = {
        isOpen: false,
      };
    },
  },
};
