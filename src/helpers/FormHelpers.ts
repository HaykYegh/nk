import { TypesOfForms } from 'globalTypes/projectDitealsTypes';
import { FieldErrors } from 'react-hook-form';

export const getErrorFilds = (errors: FieldErrors) => {
  const errorsKeys = Object.keys(errors);
  return errorsKeys.reduce((aggr, val) => {
    return aggr + ` ${val} `;
  }, '');
};

export interface ICheckedValues {
  webApplication: boolean | undefined;
  chromeExtention: boolean | undefined;
  desktopApplication: boolean | undefined;
  other: boolean | undefined;
}
export const findCheckedBox = (checkBox: ICheckedValues) => {
  const trueKeys = [];
  for (const key in checkBox) {
    if (checkBox[key as keyof ICheckedValues]) {
      trueKeys.push(key);
    }
  }
  return trueKeys.length > 1 ? TypesOfForms.other : trueKeys[0];
};
