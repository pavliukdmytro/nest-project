<template>
  <button type="button" class="mobile-navigation-button" @click="handlerClick">
    <svg class="mobile-navigation-button__icon">
      <use xlink:href="#svg-burger"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import MobileNavigation from '@/app/components/MobileNavigation/MobileNavigation.vue';
import useModalSwipe from '@/use/useModalSwipe/useModalSwipe';
import useScreenWidth from '@/use/useScreenWidth';

const modal = useModalSwipe();
const screenWidth = useScreenWidth();
const getWidth = computed((): string => {
  if (screenWidth.value < 768) return '280px';
  return '380px';
});

const handlerClick = () => {
  modal.show(
    MobileNavigation,
    {},
    {
      width: getWidth.value,
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
