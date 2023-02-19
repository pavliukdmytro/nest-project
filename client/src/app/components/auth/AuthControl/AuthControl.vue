<template>
  <button type="button" class="auth-control" @click="handlerClick">
    <svg class="auth-control__icon">
      <use xlink:href="#svg-user"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import SignIn from '@components/SignIn/SignIn.vue';
import useModal from '@use/useModal/useModal';

const modal = useModal();
const handlerClick = (): void => {
  modal.show(SignIn);
};
</script>

<style lang="scss" scoped>
.auth-control {
  display: block;
  width: 24px;
  height: 24px;
  background-color: transparent;
  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
