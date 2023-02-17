<template>
  <div v-if="!cookiesAccept" class="accept-cookies-wrapper">
    <div class="container">
      <div class="accept-cookies">
        <p class="accept-cookies__text">
          {{ result.text }}
        </p>
        <div class="accept-cookies-buttons">
          <DefButtonPrimary @click="handlerAgree">
            {{ result.agree }}
          </DefButtonPrimary>
          <DefButtonSecondary @click="handlerDisagree">
            {{ result.disagree }}
          </DefButtonSecondary>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import DefButtonPrimary from '@def/DefButton/DefButtonPrimary.vue';
import DefButtonSecondary from '@def/DefButton/DefButtonSecondary.vue';

import useCookies from '@/use/useCookies';

const props = defineProps<{
  result: {
    text: string;
    agree: string;
    disagree: string;
  };
}>();
const result = computed(() => props.result);

const cookies = useCookies();
const cookiesAccept = ref(cookies.get('COOKIES_ACCEPT'));

const handlerAgree = () => {
  cookies.set('COOKIES_ACCEPT', '1');
  cookiesAccept.value = '0';
};
const handlerDisagree = () => {
  cookies.set('COOKIES_ACCEPT', '0');
  cookiesAccept.value = '0';
};
</script>

<style lang="scss" scoped>
.accept-cookies-wrapper {
  position: fixed;
  grid-gap: 24px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: var(--beige);
}
.accept-cookies {
  display: grid;
  padding: 24px;
  @include point-md {
    grid-template-columns: auto auto;
  }
  &__text {
  }
}
.accept-cookies-buttons {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 24px;
}
</style>
