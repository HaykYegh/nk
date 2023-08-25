import React, { FC } from 'react';
import styles from './RequestBtn.module.scss';
import { IRequestBtnProps } from './RequestBtnTypes';

const RequestBtn: FC<IRequestBtnProps> = ({
  setShowFormModalBlock,
  btnTitle,
}) => {
  return (
    <button onClick={setShowFormModalBlock} className={styles.btnRequest}>
      {btnTitle}
    </button>
  );
};

export default RequestBtn;
