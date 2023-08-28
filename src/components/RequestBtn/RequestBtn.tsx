import { FC } from 'react';
import { IRequestBtnProps } from './RequestBtnTypes';

import styles from './RequestBtn.module.scss';

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
