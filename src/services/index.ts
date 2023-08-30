import axios from 'axios';
import { postUrlForm } from '../constants';
import { IPostData } from 'components/GetProjectForm/GetProjectFormTypes';

export const postFormData = async (body: IPostData) => {
  const data = await axios.post(postUrlForm, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(data);
};
