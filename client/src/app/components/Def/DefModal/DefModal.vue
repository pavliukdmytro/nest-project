<template>
  <div class="def-modal" :class="{ 'def-modal_padding': padding }" @wheel.prevent>
    <slot />
    <span class="def-modal__close" @click="$emit('close')">
      <svg
        class="def-modal__icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.40002 1.33936L14.6607 13.6L13.6 14.6607L1.33936 2.40002L2.40002 1.33936Z"
          fill="#757575"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6607 2.40002L2.40002 14.6607L1.33936 13.6L13.6 1.33936L14.6607 2.40002Z"
          fill="#757575"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DefModal',
  props: {
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.def-modal {
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  position: relative;
  width: 100%;
  &_padding {
    padding: 48px 24px;
    @include point-md {
      padding: 48px;
    }
  }
  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    z-index: 1;
  }
  &__icon {
    display: block;
    width: 16px;
    height: 16px;
    fill: #757575;
  }
}
</style>
