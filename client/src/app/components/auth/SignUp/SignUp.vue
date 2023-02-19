<template>
  <div class="sign-up">
    <h1>SignUp</h1>
    <button type="button" @click="handlerSignIn">sign in</button>
  </div>
</template>

<script lang="ts" setup>
import SignIn from '@components/auth/SignIn/SignIn.vue';
import useModal from '@use/useModal/useModal';

const modal = useModal();
const handlerSignIn = () => {
  modal.show(SignIn);
};
</script>

<style lang="scss" scoped>
.sign-up {
}
</style>
