<template>
  <div class="sign-up">
    <h1>SignUp</h1>
    <form action=""></form>
    <button type="button" @click="handlerSignIn">sign in</button>
  </div>
</template>

<script lang="ts" setup>
import SignIn from '@components/auth/SignIn/SignIn.vue';
import useModal from '@use/useModal/useModal';

const modal = useModal();
const handlerSignIn = async () => {
  await modal.hide();
  modal.show(SignIn, {}, { width: '320px' });
};
</script>

<style lang="scss" scoped>
.sign-up {
}
</style>
