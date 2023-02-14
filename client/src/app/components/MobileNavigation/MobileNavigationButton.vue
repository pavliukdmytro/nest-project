<template>
  <button type="button" class="mobile-navigation-button">
    <svg class="mobile-navigation-button__icon">
      <use xlink:href="#svg-burger"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.mobile-navigation-button {
  display: block;
  width: 24px;
  &__icon {
    display: block;
    width: 24px;
    height: 24px;
  }
}
</style>
