import React from 'react';

import styles from './RoutesComponent.module.scss';
import { Route, Routes } from 'react-router-dom';

const RoutesComponent = () => {
  return (
    <div className={styles.RoutesComponent}>
      <Routes>
        <Route path="/" element={'main'} />
        <Route path="/why-nk" />
        <Route path="/web-applications" />
        <Route path="/chrome-extensions" />
        <Route path="/desktop-applications" />
        <Route path="/approach" />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
