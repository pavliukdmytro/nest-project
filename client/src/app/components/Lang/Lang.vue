<template>
  <div class="lang">
    <a
      v-for="{ text, url, active } in items"
      :key="text"
      :class="{ lang__item_active: active }"
      :href="url"
      class="lang__item"
    >
      {{ text }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';

const { state } = useStore();

const items = computed(() => state?.global?.data?.lang?.items);
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
