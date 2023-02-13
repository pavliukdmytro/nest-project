<template>
  <div class="lang">
    <a
      v-for="{ name, link, active } in items"
      :key="name"
      :class="{ lang__item_active: active }"
      :href="link"
      class="lang__item"
    >
      {{ name }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, type PropType } from 'vue';

import { IResult } from '@/app/components/Lang/ILang';

const props = defineProps({
  result: {
    type: Object as PropType<IResult>,
  },
});

const items = computed(() => props?.result?.items);
</script>

<style lang="scss" scoped>
.lang {
  &__item {
    padding: 3px 6px 2px;
    border: 1px solid transparent;
    text-transform: uppercase;
    &_active {
      border-color: grey;
    }
  }
}
</style>
