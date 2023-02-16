import { App, createApp, DefineComponent, ref } from 'vue';
import ModalComponent from '@/use/useModal/ModalComponent.vue';
import VueUniversalModal from 'vue-universal-modal';

let app: App | null;

document.body.insertAdjacentHTML('beforeend', '<div class="modal-component"></div>');
document.body.insertAdjacentHTML('beforeend', '<div id="modals"></div>');
const isOpen = ref(true);
interface IProps {
  [name: string]: any;
}

export default function useModal() {
  const show = (AppComponent: DefineComponent, props?: IProps) => {
    isOpen.value = true;
    app = createApp(
      <ModalComponent afterLeave={app?.unmount()}>
        <AppComponent {...props} />
      </ModalComponent>,
      {
        isOpen,
      }
    );
    app.use(VueUniversalModal, {
      teleportTarget: '#modals',
    });

    app.mount('.modal-component');
  };

  const hide = () => {
    isOpen.value = false;
  };

  return {
    show,
    hide,
  };
}
