import * as yup from 'yup';
import {
  invalidEmail,
  phoneValidation,
  projectBriefError,
  required,
  requiredEmail,
} from '../constants/validationErorrs';

export const scemaGetProjectForm = yup.object().shape({
  lastName: yup.string().required(required),
  firstName: yup.string().required(required),
  email: yup.string().required(requiredEmail).email(invalidEmail),
  projectBrief: yup.string().required(projectBriefError),
  support: yup.boolean(),
  web_application: yup.boolean(),
  other: yup.boolean(),
  phone: yup.number().typeError(phoneValidation),
  projectBudget: yup.string(),
});
