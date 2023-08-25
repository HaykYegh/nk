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
