<template>
  <a href="/" class="header-logo">
    <svg class="header-logo__icon">
      <use xlink:href="#svg-flag"></use>
    </svg>
  </a>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header-logo {
  display: block;
  &__icon {
    width: 50px;
    height: 50px;
    @include point-md {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
