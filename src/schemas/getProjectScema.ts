import * as yup from 'yup';
import {
  invalidEmail,
  phoneRegExp,
  phoneValidation,
  projectBriefError,
  required,
  requiredEmail,
} from '../constants/validationErorrs';
import { transformScemas } from 'helpers/FormHelpers';

export const scemaGetProjectForm = yup.object().shape({
  lastName: yup.string().required(`last${required}`),
  firstName: yup.string().required(`First${required}`),
  email: yup.string().required(requiredEmail).email(invalidEmail),
  projectBrief: yup.string().required(projectBriefError),
  chromeExtention: yup.boolean(),
  web_application: yup.boolean(),
  other: yup.boolean(),
  phone: yup
    .string()
    .transform(transformScemas)
    .matches(phoneRegExp, phoneValidation)
    .nullable(),
  projectBudget: yup.string(),
  desktopApplication: yup.boolean(),
});
