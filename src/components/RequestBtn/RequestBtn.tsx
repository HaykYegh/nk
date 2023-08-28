import React, { FC } from 'react';
import styles from './RequestBtn.module.scss';
import { IRequestBtnProps } from './RequestBtnTypes';

const RequestBtn: FC<IRequestBtnProps> = ({
  setShowFormModalBlock,
  btnTitle,
}) => {
  return (
    <div className={styles.btnRequest}>
      <button onClick={setShowFormModalBlock}>{btnTitle}</button>
    </div>
  );
};

export default RequestBtn;
