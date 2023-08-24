import { useState } from 'react';
import AboutFormModal from '../AboutFormModal/AboutFormModal';
import RequestBtn from '../RequestBtn/RequestBtn';
import { createPortal } from 'react-dom';
import styles from './useAboutForm.module.scss';
const AboutForm = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const setShowFormModalBlock = () => {
    setShowFormModal(!showFormModal);
  };
  const portalDiv = document.getElementById('root') as HTMLElement;

  return (
    <div className={styles.aboutForm}>
      <RequestBtn setShowFormModalBlock={setShowFormModalBlock} />
      {createPortal(
        <AboutFormModal
          setShowFormModalBlock={setShowFormModalBlock}
          showFormModal={showFormModal}
        />,
        portalDiv,
      )}
    </div>
  );
};

export default AboutForm;
