<template>
  <Modal :model-value="props?.isOpen.value" :close="hide" @after-leave="afterLeave">
    <span @click="hide">
      <svg class="modal-swipe__icon">
        <use xlink:href="#svg-close"></use>
      </svg>
    </span>
    <slot />
  </Modal>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import useModal from '@/use/useModal/useModal';

const modal = useModal();

const props = defineProps({
  isOpen: Object,
  afterLeave: Function,
});

const hide = () => {
  modal.hide();
  console.log('hide');
};
</script>

<style lang="scss" scoped>
.modal {
}
</style>
