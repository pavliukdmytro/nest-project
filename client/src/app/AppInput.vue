<template>
  <div class="app-input">
    <input class="app-input__area" type="text" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-input {
  flex-grow: 1;
  &__area {
    height: 100%;
    width: 100%;
    padding: 5px 15px;
  }
}
</style>
