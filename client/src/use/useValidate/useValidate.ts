import { ref, Ref, onMounted } from 'vue';

export default function useValidate(input: Ref<HTMLInputElement | null>): Ref<boolean> {
  const isValid = ref<boolean>(true);

  onMounted(() => {
    if (input.value) {
      input.value.addEventListener('invalid', (e: Event) => {
        e.preventDefault();
        isValid.value = false;
      });

      input.value.addEventListener('blur', (e: FocusEvent) => {
        const target = e.target as HTMLInputElement;
        isValid.value = target.checkValidity();
      });
    }
  });

  return isValid;
}
