<template>
  <button type="button" class="mobile-navigation-button" @click="handlerClick">
    <svg class="mobile-navigation-button__icon">
      <use xlink:href="#svg-burger"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import MobileNavigation from '@/app/components/MobileNavigation/MobileNavigation.vue';
import useModalSwipe from '@/use/useModalSwipe/useModalSwipe';

const modal = useModalSwipe();

const handlerClick = () => {
  modal.show(
    MobileNavigation,
    { result: 'Hello world!!' },
    {
      width: '280px',
    }
  );
};
</script>

<style lang="scss" scoped>
.mobile-navigation-button {
  display: block;
  width: 24px;
  &__icon {
    display: block;
    width: 24px;
    height: 24px;
  }
}
</style>
