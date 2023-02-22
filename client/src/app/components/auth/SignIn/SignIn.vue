<template>
  <div class="sign-in">
    <UiTitle :result="2" center>
      <h2>Sign in</h2>
    </UiTitle>

    <form action="" class="sign-in-form" @submit.prevent="handlerSubmit">
      <UiEmail placeholder="email" :required="true" />
      <UiInput placeholder="password" type="password" :required="true" />
      <UiButtonPrimary type="submit"> submit </UiButtonPrimary>
    </form>
    <button type="button" class="sign-in__button" @click="handlerSignUp">sign up</button>
  </div>
</template>

<script lang="ts" setup>
import UiInput from '@components/Ui/UiInput/UiInput.vue';
import UiEmail from '@ui/UiEmail/UiEmail.vue';
import UiTitle from '@ui/UiTitle/UiTitle.vue';
import SignUp from '@components/auth/SignUp/SignUp.vue';
import useModal from '@use/useModal/useModal';
import UiButtonPrimary from '@ui/UiButton/UiButtonPrimary.vue';

const handlerSubmit = () => {};

const modal = useModal();

const handlerSignUp = async () => {
  await modal.hide();
  modal.show(SignUp, {}, { width: '320px' });
};
</script>

<style lang="scss" scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  &__button {
    align-self: center;
    margin-top: 10px;
  }
}
.sign-in-form {
  display: grid;
  grid-row-gap: 15px;
}
</style>
