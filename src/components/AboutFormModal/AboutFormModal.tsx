import React, { FC } from 'react';
import styles from './AboutFormModal.module.scss';
import { IAboutFormModalProps } from './AboutFormModalTypes';
import classNames from 'classnames';

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
      <div onBlur={setShowFormModalBlock} className={styles.lightbox_content}>
        <div className={styles.block_form}></div>
      </div>
    </div>
  );
};

export default AboutFormModal;
