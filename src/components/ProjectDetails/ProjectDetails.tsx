import { FC, useState } from 'react';
import AboutFormModal from '../ProjectDetailsModal';
import RequestBtn from '../RequestBtn/RequestBtn';
import { createPortal } from 'react-dom';
import { IProjectDitealsProps } from './ProjectDetailsTypes';
import styles from './ProjectDetails.module.scss';

const ProjectDiteals: FC<IProjectDitealsProps> = ({
  btnTitle,
  checkBoxShow,
  formTitle,
}) => {
  const [showFormModal, setShowFormModal] = useState(false);

  const setShowFormModalBlock = () => {
    setShowFormModal(!showFormModal);
  };

  return (
    <div className={styles.aboutForm}>
      <RequestBtn
        setShowFormModalBlock={setShowFormModalBlock}
        btnTitle={btnTitle}
      />
      {showFormModal &&
        createPortal(
          <AboutFormModal
            setShowFormModalBlock={setShowFormModalBlock}
            formTitle={formTitle}
            checkBoxShow={checkBoxShow}
          />,
          document.body,
        )}
    </div>
  );
};

export default ProjectDiteals;
