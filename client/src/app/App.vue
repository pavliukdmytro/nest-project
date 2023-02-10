<template>
  <div class="app">
    <div class="app-header">
      <AppInput v-model="inputValue" @input="handlerInput" @keyup.enter="handlerSave" />
      <button class="app-button" type="button" @click="handlerSave">save</button>
    </div>
    <div class="app-items">
      <AppItem v-for="item in inputItems" :key="item.id" :result="item" @remove="handlerRemove" />
    </div>
    <button @click="handlerClick">Open modal</button>
    <br />
    screen width: {{ screenWidth }}
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

import useModal from '@/app/use/useModal';
import useScreenWidth from '@/app/use/useScreenWidth';
import AppInput from './AppInput.vue';

import AppItem from './AppItem';

const screenWidth = useScreenWidth();

interface InputItems {
  id: number;
  text: string;
}

const inputValue = ref('');
const inputItems: Ref = ref([]);

const handlerInput = (e: PointerEvent): void => {
  const { value } = e.target as HTMLInputElement;
  inputValue.value = value;
};
const handlerSave = (): void => {
  inputItems.value.unshift({
    id: Date.now(),
    text: inputValue.value,
  });
};

const handlerRemove = (id: number): void => {
  inputItems.value = inputItems.value.filter((el: InputItems): boolean => el.id !== id);
};

const handlerClick = () => {
  const modal = useModal();

  modal.show({
    name: 'TestModal',
    width: '320px',
    props: {
      result: 'Dimooon!',
    },
  });
  // console.log('click!!');
  // console.log($DefModal.star);
};
</script>

<style lang="scss" scoped>
.app {
  margin-top: 60px;
}
.app-items {
  display: grid;
  grid-row-gap: 20px;
}
.app-button {
  background-color: black;
  color: #fff;
  padding: 10px 20px;
  margin-left: 20px;
}
.app-header {
  display: flex;
  align-items: stretch;
  margin-bottom: 20px;
}
</style>
