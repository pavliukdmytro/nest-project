<template>
  <div class="header">
    <div class="header-top">
      <HeaderLogo />
      <Menu />
      <Lang :result="lang" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

import HeaderLogo from '@/app/components/Header/HeaderLogo.vue';
import Lang from '@/app/components/Lang/Lang.vue';
import Menu from '@/app/components/menu/Menu.vue';

const props = defineProps(['result']);

const lang = computed(() => props.result.lang);
</script>

<style lang="scss" scoped>
.header {
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
