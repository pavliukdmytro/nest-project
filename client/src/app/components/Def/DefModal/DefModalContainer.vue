<template>
  <Modal v-model="defModal.isOpen" :close="hide" class="def-modal-container">
    <DefModal v-if="!empty" :style="`max-width: ${width}`" :padding="padding" @close="hide">
      <component :is="componentName" v-bind="propsObject" />
    </DefModal>
    <div v-else :style="`max-width: ${width}`">
      <component :is="componentName" v-bind="propsObject" @close="hide" />
    </div>
  </Modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import DefModal from '@/app/components/Def/DefModal/DefModal.vue';

export default {
  name: 'DefModalContainer',
  components: {
    DefModal,
  },
  computed: {
    ...mapState({
      defModal: ({ global }) => global.defModal,
    }),
    width() {
      return this.defModal?.data?.width;
    },
    componentName() {
      return this.defModal?.data?.name;
    },
    propsObject() {
      return this.defModal?.data?.props || null;
    },
    empty() {
      return this.defModal?.data?.empty || null;
    },
    padding() {
      return this.defModal?.data?.padding;
    },
  },
  methods: {
    ...mapMutations({
      modalHide: 'global/modalHide',
    }),
    hide() {
      // document.body.style.overflow = 'visible';
      this.modalHide();
    },
  },
};
</script>

<style lang="scss" scoped>
.def-modal-container {
}
</style>
