<template>
  <div class="lang">
    <button
      v-for="item in items"
      :key="item.name"
      class="lang__item"
      type="button"
      @click="handlerClick(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

import type { IItem, IProps } from '@/app/components/Lang/ILang';

// type Props = renamed;

const props = defineProps<IProps>();

const items = computed(() => props?.result?.items);

const handlerClick = (item: IItem) => {
  console.log(item);
};
</script>

<style lang="scss" scoped>
.lang {
  &__item {
    padding: 3px 6px 2px;
    border: 1px solid black;
  }
}
</style>
