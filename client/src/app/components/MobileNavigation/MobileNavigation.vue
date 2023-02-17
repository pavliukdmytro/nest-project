<template>
  <div class="mobile-navigation">
    <div class="mobile-navigation-header">
      <HeaderLogo />
      <Lang />
    </div>

    <Menu />
  </div>
</template>

<script lang="ts" setup>
import Lang from '@/app/components/Lang/Lang.vue';
import Menu from '@/app/components/menu/Menu.vue';
import HeaderLogo from '@/app/components/Header/HeaderLogo.vue';

const props = defineProps({
  result: Object,
});
</script>

<style lang="scss" scoped>
.mobile-navigation {
  :deep(.menu) {
    margin: 24px 0;
  }
}
.mobile-navigation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  :deep(.header-logo__icon) {
    width: 30px;
    height: 30px;
  }
  :deep(.lang) {
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
