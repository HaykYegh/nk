import React, { MouseEvent, useState, FocusEvent } from 'react';
import AboutFormModal from '../AboutFormModal/AboutFormModal';
import RequestBtn from '../RequestBtn/RequestBtn';
import styles from './useAboutForm.module.scss';

const AboutForm = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const setShowFormModalBlock = (
    e: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>,
  ) => {
    setShowFormModal(!showFormModal);
  };

  return (
    <div className={styles.aboutForm}>
      <RequestBtn setShowFormModalBlock={setShowFormModalBlock} />
      <AboutFormModal
        setShowFormModalBlock={setShowFormModalBlock}
        showFormModal={showFormModal}
      />
    </div>
  );
};

export default AboutForm;
