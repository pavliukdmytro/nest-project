import { useStore } from '@/store';
import { computed } from 'vue';

export default function useScreenWidth() {
  const { state } = useStore();
  const screenWidth = computed(() => state.global?.screenWidth);
  return screenWidth;
}
