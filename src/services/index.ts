import axios from 'axios';
import { postUrlForm, toastDefaultValue } from '../constants';
import { IPostData } from 'components/GetProjectForm/GetProjectFormTypes';
import { toast } from 'react-toastify';

export const postFormData = async (body: IPostData) => {
  const { data } = await axios.post(postUrlForm, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  toast.success(data, {
    ...toastDefaultValue(),
  });
};
