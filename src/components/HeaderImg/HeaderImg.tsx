import React, { useEffect, useState } from 'react';

import styles from './HeaderImg.module.scss';
import { useLocation } from 'react-router-dom';

const HeaderImg = () => {
  const location = useLocation();
  const [currentBg, setCurrentBg] = useState('');
  const [textOnImg, setTextOnImg] = useState('');

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
    switch (location.pathname) {
      case '/':
        setCurrentBg(
          'https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg',
        );
        setTextOnImg('SOFTWARE DEVELOPMENT AND INNOVATION');
        break;
      case '/web-applications':
        setCurrentBg(
          'https://images.unsplash.com/photo-1539689007727-bf17b6198946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
        );
        setTextOnImg('WEB APPLICATIONS DEVELOPMENT');
        break;
      case '/chrome-extensions':
        setCurrentBg(
          'https://i0.wp.com/res.cloudinary.com/practicaldev/image/fetch/s--jy_UG-FI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/230og48eo411wc0gopd5.png?w=1230&ssl=1',
        );
        setTextOnImg('CHROME EXTENSIONS DEVELOPMENT');
        break;
      case '/desktop-applications':
        setCurrentBg(
          'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        );
        setTextOnImg('DESKTOP APPLICATIONS DEVELOPMENT');
        break;
      case '/approach':
        setCurrentBg(
          'https://www.accountability.org/static/dd2a3fb09c6d5a28be81ed7ae8cc03e9/89218/AccountAbility_Careers.webp',
        );
        setTextOnImg('STEPS TO YOUR PROJECT');
        break;
      case '/about':
        setCurrentBg(
          'https://d7fi61gsgzcz4.cloudfront.net/assets/page-hero-images/istock-493171547_2500.jpg/dynamic:1-aspect:2.5-fit:cover-strategy:entropy/istock-493171547_2500--1400.webp',
        );
        break;
    }
  }, [location.pathname]);

  return (
    <>
      {pathWithImg(location.pathname) && (
        <div
          className={styles.HeaderImg}
          style={{ backgroundImage: `url(${currentBg})` }}
        >
          <div className={styles.textOnImg}>
            <h1>{textOnImg}</h1>
            {location.pathname === '/' && (
              <button className={styles.contactUsBtn}>CONTACT US</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderImg;
