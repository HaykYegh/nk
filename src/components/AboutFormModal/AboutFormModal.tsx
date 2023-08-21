import { FC } from 'react';
import { IAboutFormModalProps } from './AboutFormModalTypes';
import classNames from 'classnames';
import styles from './AboutFormModal.module.scss';
import GetProjectForm from '../GetProjectForm/GetProjectForm';

const AboutFormModal: FC<IAboutFormModalProps> = ({
  showFormModal,
  setShowFormModalBlock,
}) => {
  return (
    <div
      className={classNames(styles.lightbox_inner, {
        [styles.lightbox_inner_none]: !showFormModal,
      })}
    >
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
  );
};

export default AboutFormModal;
