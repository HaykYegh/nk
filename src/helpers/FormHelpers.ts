import { FieldErrors } from 'react-hook-form';

export const getErrorFilds = (errors: FieldErrors) => {
  const errorsKeys = Object.keys(errors);
  return errorsKeys.reduce((aggr, val) => {
    return aggr + ` ${val} `;
  }, '');
};
