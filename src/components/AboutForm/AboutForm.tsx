import { FC, useEffect, useState } from 'react';
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
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    if (showFormModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [showFormModal]);
  const setShowFormModalBlock = () => {
    setShowFormModal(!showFormModal);
  };

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
        document.body,
      )}
    </div>
  );
};

export default AboutForm;
