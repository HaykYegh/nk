import { FC } from 'react';
import { IRequestBtnProps } from './RequestBtnTypes';

import styles from './RequestBtn.module.scss';

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
