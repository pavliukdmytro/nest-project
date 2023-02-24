<template>
  <div class="header">
    <div class="header-top-wrapper">
      <div class="container">
        <div class="header-top">
          <Menu v-if="screenWidth >= 992" />
          <Lang v-if="screenWidth >= 992" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-main">
        <HeaderLogo />
        <div class="header-control">
          <AuthControl />
          <MobileNavigationButton v-if="screenWidth < 992" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogo from '@components/Header/HeaderLogo.vue';
import AuthControl from '@components/auth/AuthControl/AuthControl.vue';
import useScreenWidth from '@/use/useScreenWidth';
import Lang from '@components/Lang/Lang.vue';
import Menu from '@components/menu/Menu.vue';
import MobileNavigationButton from '@components/MobileNavigation/MobileNavigationButton.vue';

const screenWidth = useScreenWidth();
</script>

<style lang="scss" scoped>
.header {
}
.header-top-wrapper {
  background-color: var(--dark-grey);
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: #fff;
}
.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-control {
  display: flex;
  :deep(.mobile-navigation-button) {
    margin-left: 10px;
  }
}
</style>
