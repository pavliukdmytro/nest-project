<template>
  <a v-if="mainPageLink" :href="mainPageLink.url" class="header-logo">
    <svg class="header-logo__icon">
      <use xlink:href="#svg-flag"></use>
    </svg>
  </a>
</template>

<script lang="ts" setup>
import { useStore } from '@/store';
import { computed } from 'vue';

const { state } = useStore();

const mainPageLink = computed(() => state.global?.data?.mainPageLink);
</script>

<style lang="scss" scoped>
.header-logo {
  display: block;
  &__icon {
    width: 50px;
    height: 50px;
    @include point-md {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
