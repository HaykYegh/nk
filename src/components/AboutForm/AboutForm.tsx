<<<<<<< HEAD
import { FC, useState } from 'react';
import AboutFormModal from '../AboutFormModal/AboutFormModal';
import RequestBtn from '../RequestBtn/RequestBtn';
import { createPortal } from 'react-dom';
import { IAboutFormProps } from './AboutFormTitle';
import styles from './useAboutForm.module.scss';

const AboutForm: FC<IAboutFormProps> = ({
  btnTitle,
  checkBoxShow,
  formTitle,
}) => {
=======
import { useState } from 'react';
import AboutFormModal from '../AboutFormModal/AboutFormModal';
import RequestBtn from '../RequestBtn/RequestBtn';
import { createPortal } from 'react-dom';
import styles from './useAboutForm.module.scss';
const AboutForm = () => {
>>>>>>> 653111f45019c4db970f78af745e1e6ad90c0d8d
  const [showFormModal, setShowFormModal] = useState(false);
  const setShowFormModalBlock = () => {
    setShowFormModal(!showFormModal);
  };
  const portalDiv = document.getElementById('root') as HTMLElement;

  return (
    <div className={styles.aboutForm}>
      <RequestBtn
        setShowFormModalBlock={setShowFormModalBlock}
        btnTitle={btnTitle}
      />
      {createPortal(
        <AboutFormModal
          setShowFormModalBlock={setShowFormModalBlock}
          showFormModal={showFormModal}
          formTitle={formTitle}
          checkBoxShow={checkBoxShow}
        />,
        portalDiv,
      )}
    </div>
  );
};

export default AboutForm;
