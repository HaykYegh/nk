import React, { useEffect, useState } from 'react';

import styles from './HeaderImg.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { getImageFromPath } from 'helpers/getImageFromPath';

const HeaderImg = () => {
  const location = useLocation();
  const [currentBg, setCurrentBg] = useState('');
  const [textOnImg, setTextOnImg] = useState('');

  const navigate = useNavigate();

  const linkToContact = () => {
    navigate('/contact-us');
  };

  const pathWithImg = (path: string) => {
    if (
      path === '/' ||
      path === '/web-applications' ||
      path === '/chrome-extensions' ||
      path === '/desktop-applications' ||
      path === '/approach' ||
      path === '/about'
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const { url, text }: { url: string; text: string } = getImageFromPath(
      location.pathname,
    );
    setCurrentBg(url);
    setTextOnImg(text);
  }, [location.pathname]);

  return pathWithImg(location.pathname) ? (
    <div
      className={styles.HeaderImg}
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <div className={styles.textOnImg}>
        <h1>{textOnImg}</h1>
        {location.pathname === '/' && (
          <button onClick={linkToContact} className={styles.contactUsBtn}>
            CONTACT US
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default HeaderImg;
