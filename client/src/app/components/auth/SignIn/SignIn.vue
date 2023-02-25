<template>
  <div class="sign-in">
    <UiTitle :result="2" center>
      <h2>{{ loginData?.title }}</h2>
    </UiTitle>
    <form action="" class="sign-in-form" @submit.prevent="handlerSubmit">
      <UiEmail placeholder="email" :required="true" name="email" />
      <UiInput placeholder="password" type="password" :required="true" name="password" />
      <UiButtonPrimary type="submit">{{ loginData?.button }}</UiButtonPrimary>
    </form>
    <button type="button" class="sign-in__button" @click="handlerSignUp">
      {{ loginData?.goSignUp }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import UiInput from '@components/Ui/UiInput/UiInput.vue';
import UiEmail from '@ui/UiEmail/UiEmail.vue';
import UiTitle from '@ui/UiTitle/UiTitle.vue';
import SignUp from '@components/auth/SignUp/SignUp.vue';
import useModal from '@use/useModal/useModal';
import UiButtonPrimary from '@ui/UiButton/UiButtonPrimary.vue';
import { onBeforeMount, ref } from 'vue';

const handlerSubmit = async (e: SubmitEvent) => {
  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);

  await axios.post(`/auth/login`, Object.fromEntries(formData));
};

const modal = useModal();

const handlerSignUp = async () => {
  await modal.hide();
  modal.show(SignUp, {}, { width: '320px' });
};

interface ILoginData {
  title?: string;
  button?: string;
  goSignUp?: string;
}

const loginData = ref<ILoginData>({});

onBeforeMount(async () => {
  try {
    const response = await axios.get(`/auth/login`);
    loginData.value = response.data;
  } catch (err) {
    console.error(err);
  }
});
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
