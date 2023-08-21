import React from 'react';

import styles from './HeaderImg.module.scss';

const HeaderImg = () => {
  return (
    <div className={styles.HeaderImg}>
      <img
        src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg"
        alt=""
      />
      <div className={styles.textOnImg}>
        <h1>SOFTWARE DEVELOPMENT AND INNOVATION</h1>
        <button className={styles.contactUsBtn}>CONTACT US</button>
      </div>
    </div>
  );
};

export default HeaderImg;
