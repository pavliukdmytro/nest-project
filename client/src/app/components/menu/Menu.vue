<template>
  <nav class="menu">
    <a v-for="{ text, url, test } in items" :key="url" :href="url">{{ text }}{{ test }}</a>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { IMenu } from '@/store/modules/menu/IMenu';

const store = useStore();

const items = computed<IMenu>(() => store.state.menu.data.items);
</script>

<style lang="scss" scoped>
.menu {
}
</style>
