import { FieldErrors } from 'react-hook-form';

export const findError = (errors: FieldErrors) => {
  const errorsKeys = Object.keys(errors);
  return errorsKeys.reduce((aggr, val) => {
    return aggr + ` ${val} `;
  }, '');
};
