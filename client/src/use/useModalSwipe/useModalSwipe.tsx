import { DefineComponent, createApp, App, ref } from 'vue';

import ModalSwipe from '@/use/useModalSwipe/ModalSwipe.vue';

import { IProps, IOptions } from '@/use/useModalSwipe/IModalSwipe';

let app: App | null;
const isShow = ref(true);

export default function useModalSwipe() {
  const leave = () => {
    app?.unmount();
    app = null;
  };
  const show = (AppComponent: DefineComponent, props?: IProps, options?: IOptions) => {
    if (app) return;
    isShow.value = true;
    app = createApp(
      <ModalSwipe isShow={isShow} leave={leave} {...options}>
        <AppComponent {...props} />
      </ModalSwipe>,
      props
    );

    app.mount('#modals');
  };
  const hide = () => {
    if (app === null && !isShow.value) return;
    isShow.value = false;
  };

  return {
    show,
    hide,
  };
}
