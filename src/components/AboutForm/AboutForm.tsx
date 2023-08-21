import React, { useState } from 'react';
import AboutFormModal from '../AboutFormModal/AboutFormModal';
import RequestBtn from '../RequestBtn/RequestBtn';
import styles from './useAboutForm.module.scss';
import { createPortal } from 'react-dom';

const AboutForm = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const setShowFormModalBlock = () => {
    setShowFormModal(!showFormModal);
  };

  return (
    <div className={styles.aboutForm}>
      <RequestBtn setShowFormModalBlock={setShowFormModalBlock} />
      {createPortal(
        <AboutFormModal
          setShowFormModalBlock={setShowFormModalBlock}
          showFormModal={showFormModal}
        />,
        document.body,
      )}
    </div>
  );
};

export default AboutForm;
