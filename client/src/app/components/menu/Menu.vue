<template>
  <nav class="menu">
    <a
      v-for="{ text, url, active } in items"
      :key="url"
      :href="url"
      class="menu__item"
      :class="{ menu__item_active: active }"
    >
      {{ text }}
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from '@/store';

const store = useStore();

const items = computed(() => store?.state?.menu?.data?.items);
</script>

<style lang="scss" scoped>
.menu {
  display: grid;
  grid-row-gap: 16px;
  @include point-lg {
    display: flex;
    flex-direction: row;
  }
  &__item {
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-position: under;
    font-size: 18px;

    &:not(:last-child) {
      margin-right: 20px;
    }
    &_active {
      text-decoration-color: currentColor;
    }
  }
}
</style>
