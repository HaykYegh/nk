import { SliderData } from '../constants';

export const getNextImg = () => {
  let nextId = 0;

  return () => {
    nextId += 1;
    if (!SliderData[nextId]) {
      nextId = 0;
      return SliderData[nextId];
    }

    return SliderData[nextId];
  };
};
