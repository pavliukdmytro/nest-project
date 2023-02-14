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
import { computed } from 'vue';
import { useStore } from 'vuex';

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
