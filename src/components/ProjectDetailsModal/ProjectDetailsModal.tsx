import { FC, useEffect } from 'react';
import { IProjectDitealsProps } from './ProjectDetailsModalTypes';
import GetProjectForm from '../GetProjectForm/GetProjectForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectDetailsModal.module.scss';

const ProjectDetailsModal: FC<IProjectDitealsProps> = ({
  setShowFormModalBlock,
  checkBoxShow,
  formTitle,
}) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'visible';
    };
  }, []);
  return (
    <div className={styles.lightbox_inner}>
      <div className={styles.lightbox_content}>
        <div className={styles.block_form}>
          <div className={styles.titleBlock}>
            <div className={styles.title}>{formTitle}</div>
            <button
              onClick={setShowFormModalBlock}
              className={styles.closeBlock}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <GetProjectForm checkBoxShow={checkBoxShow} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
