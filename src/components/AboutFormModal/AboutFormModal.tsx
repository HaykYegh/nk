import { FC } from 'react';
import { IAboutFormModalProps } from './AboutFormModalTypes';
import GetProjectForm from '../GetProjectForm/GetProjectForm';
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
              X
            </button>
          </div>
          <GetProjectForm />
        </div>
      </div>
    </div>
  ) : null;
};

export default AboutFormModal;
