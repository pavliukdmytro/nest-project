import store from '@/store';

import { IModalData } from '@/store/modules/global/IGlobal';

interface IUseModal {
  show: {
    // eslint-disable-next-line no-unused-vars
    (payload: IModalData): void;
  };
  hide: {
    (): void;
  };
}
export default function useModal(): IUseModal {
  const show = (payload: IModalData): void => {
    store.commit('global/modalShow', payload);
  };

  const hide = () => {
    store.commit('global/modalHide');
  };

  return {
    show,
    hide,
  };
}
