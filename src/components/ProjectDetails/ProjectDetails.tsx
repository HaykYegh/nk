import { FC, useState } from 'react';
import RequestBtn from '../RequestBtn/RequestBtn';
import { createPortal } from 'react-dom';
import { IProjectDitealsProps } from './ProjectDetailsTypes';
import styles from './ProjectDetails.module.scss';
import ProjectDetailsModal from 'components/ProjectDetailsModal/ProjectDetailsModal';

const ProjectDiteals: FC<IProjectDitealsProps> = ({
  btnTitle,
  formTitle,
  formType,
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
          <ProjectDetailsModal
            setShowFormModalBlock={setShowFormModalBlock}
            formTitle={formTitle}
            formType={formType}
          />,
          document.body,
        )}
    </div>
  );
};

export default ProjectDiteals;
