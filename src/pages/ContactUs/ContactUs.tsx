import React from 'react';
import styles from './ContactUs.module.scss';
import GetProjectForm from 'components/GetProjectForm/GetProjectForm';
import { OurOffice } from 'components/OurOffice';

const ContactUs = () => {
  return (
    <div className={styles.ContactUs}>
      <GetProjectForm contactPage={true} checkBoxShow={false} />
      <OurOffice />
    </div>
  );
};

export default ContactUs;
