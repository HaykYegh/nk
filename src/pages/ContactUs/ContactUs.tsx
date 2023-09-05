import React from 'react';
import styles from './ContactUs.module.scss';
import GetProjectForm from 'components/GetProjectForm/GetProjectForm';
import { OurOffice } from 'components/OurOffice';
import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';

const ContactUs = () => {
  return (
    <div className={styles.ContactUs}>
      <GetProjectForm formType={FormTypesEnum.conuct} />
      <OurOffice />
    </div>
  );
};

export default ContactUs;
