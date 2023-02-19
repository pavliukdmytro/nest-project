<template>
  <div class="sign-in">
    <h1>Sign in</h1>
    <form action="" @submit.prevent="handlerSubmit">
      <DefInput :required="true" :value="testData" />
      <input type="email" @input="handlerInput" />
      <input type="password" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DefInput from '@def/DefInput/DefInput.vue';

const testData = ref('');

const handlerInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement;
  testData.value = target.value;
};
const handlerSubmit = () => {
  // console.log('submit');
};
</script>

<style lang="scss" scoped>
.sign-in {
}
</style>
