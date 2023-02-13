<template>
  <div class="lang">
    <a v-for="{ name, link } in items" :key="name" class="lang__item" :href="link">
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
    border: 1px solid black;
  }
}
</style>
