import { reactive } from 'vue';
import { goodsArray } from '@/constants/goods';
import { restsArray } from '@/constants/rests';

export const store = reactive({
  isOpen: false,
  goods: goodsArray,
  rests: restsArray,

  toggleModal(value) {
    this.isOpen = value;
  },
});
