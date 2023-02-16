<template>
  <div class="header">
    <div class="header-top">
      <HeaderLogo />
      <Menu v-if="screenWidth >= 992" />
      <Lang v-if="screenWidth >= 992" />
      <MobileNavigationButton v-if="screenWidth < 992" />
    </div>
    <div>
      <!--      <button @click="show">open</button>-->
      <button @click="hide">close</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogo from '@/app/components/Header/HeaderLogo.vue';
import Lang from '@/app/components/Lang/Lang.vue';
import Menu from '@/app/components/menu/Menu.vue';
import MobileNavigationButton from '@/app/components/MobileNavigation/MobileNavigationButton.vue';

import useScreenWidth from '@/use/useScreenWidth';

import useModalSwipe from '@/use/useModalSwipe/useModalSwipe';

const screenWidth = useScreenWidth();

const modalSwipe = useModalSwipe();
const show = () => {
  // modalSwipe.show(TestModal, {});
};

const hide = () => {
  modalSwipe.hide();
};
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
