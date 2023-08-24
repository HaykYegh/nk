import { FC } from 'react';
import { IAboutFormModalProps } from './AboutFormModalTypes';
import GetProjectForm from '../GetProjectForm/GetProjectForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from './AboutFormModal.module.scss';

const AboutFormModal: FC<IAboutFormModalProps> = ({
  showFormModal,
  setShowFormModalBlock,
}) => {
  return showFormModal ? (
    <div className={styles.lightbox_inner}>
      <div className={styles.lightbox_content}>
        <div className={styles.block_form}>
          <div className={styles.titleBlock}>
            <div className={styles.title}>Tell Us About Your Project</div>
            <button
              onClick={setShowFormModalBlock}
              className={styles.closeBlock}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <GetProjectForm />
        </div>
      </div>
    </div>
  ) : null;
};

export default AboutFormModal;
