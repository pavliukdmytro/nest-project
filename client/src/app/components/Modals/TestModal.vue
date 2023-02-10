<template>
  <div>Hello Test</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['result']);
console.log(props);
</script>
