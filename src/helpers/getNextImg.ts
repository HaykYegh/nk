import { SliderData } from '../constants';

export const getNextId = (sliderId: number) => {
  if (sliderId === SliderData.length) {
    return 1;
  } else {
    return sliderId + 1;
  }
};
