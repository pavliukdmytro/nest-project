<template>
  <div class="sign-up">
    <UiTitle :result="2" center>
      <h2>Sign up</h2>
    </UiTitle>
    <form action="" class="sign-up-form" @submit.prevent="handlerSubmit">
      <UiEmail placeholder="email" required />
      <UiInputControl
        type="password"
        placeholder="password"
        required
        :is-valid="validatePassword"
        @change="passwordOne = $event.target.value"
      />
      <UiInputControl
        type="password"
        placeholder="repeat password"
        required
        :is-valid="validatePassword"
        @change="passwordTwo = $event.target.value"
      />
      <UiButtonPrimary> submit </UiButtonPrimary>
    </form>
    <button type="button" class="sign-up__button" @click="handlerSignIn">sign in</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import SignIn from '@components/auth/SignIn/SignIn.vue';
import useModal from '@use/useModal/useModal';
import UiTitle from '@ui/UiTitle/UiTitle.vue';
import UiEmail from '@ui/UiEmail/UiEmail.vue';
import UiButtonPrimary from '@ui/UiButton/UiButtonPrimary.vue';
import UiInputControl from '@ui/UiInput/UiInputControl.vue';

const modal = useModal();

const handlerSignIn = async () => {
  await modal.hide();
  modal.show(SignIn, {}, { width: '320px' });
};

const passwordOne = ref('');
const passwordTwo = ref('');

const validatePassword = computed(() => {
  if (
    passwordOne.value.length > 5 &&
    passwordTwo.value.length > 5 &&
    passwordTwo.value === passwordOne.value
  ) {
    return true;
  }
  return false;
});

const handlerSubmit = () => {
  console.log('submit!!!');
};
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  &__button {
    align-self: center;
    margin-top: 10px;
  }
}
.sign-up-form {
  display: grid;
  grid-row-gap: 15px;
}
</style>
