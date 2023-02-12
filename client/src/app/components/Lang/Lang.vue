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
import { defineProps, computed, type PropType } from 'vue';

import { IItem, IResult } from '@/app/components/Lang/ILang';

// type Props = renamed;

const props = defineProps({
  result: {
    type: Object as PropType<IResult>,
  },
});

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
