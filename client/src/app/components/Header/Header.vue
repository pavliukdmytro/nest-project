<template>
  <div class="header">
    <div class="header-top">
      <HeaderLogo />
      <Menu v-if="screenWidth >= 992" />
      <Lang v-if="screenWidth >= 992" />
      <MobileNavigationButton v-if="screenWidth < 992" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogo from '@/app/components/Header/HeaderLogo.vue';
import Lang from '@/app/components/Lang/Lang.vue';
import Menu from '@/app/components/menu/Menu.vue';
import MobileNavigationButton from '@/app/components/MobileNavigation/MobileNavigationButton.vue';

import useScreenWidth from '@/app/use/useScreenWidth';

const screenWidth = useScreenWidth();
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
