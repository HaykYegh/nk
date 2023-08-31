import { FormTypesEnum, TypesOfForms } from 'globalTypes/projectDitealsTypes';
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
export const findCheckedBox = (checkBox: ICheckedValues, formType: string) => {
  if (formType === FormTypesEnum.global || formType === FormTypesEnum.whyNk) {
    const trueKeys = [];
    for (const key in checkBox) {
      if (checkBox[key as keyof ICheckedValues]) {
        trueKeys.push(key);
      }
    }
    return trueKeys.length > 1 ? TypesOfForms.other : trueKeys[0] || 'other';
  } else {
    switch (formType) {
      case FormTypesEnum.webApp:
        return TypesOfForms.webApplication;
      case FormTypesEnum.chrome:
        return TypesOfForms.chromeExtention;
      case FormTypesEnum.desktop:
        return TypesOfForms.desktopApplication;
      case FormTypesEnum.conuct:
        return TypesOfForms.contuctUs;
      default:
        return 'other';
    }
  }
};

export const transformScemas = (value: string) =>
  value === '' ? undefined : value;
