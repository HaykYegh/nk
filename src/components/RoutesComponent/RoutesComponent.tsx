import React from 'react';

import styles from './RoutesComponent.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Approach } from 'pages/Approach';
import About from 'components/About/About';
import WhyNK from 'components/WhyNK/WhyNK';

const RoutesComponent = () => {
  return (
    <div className={styles.RoutesComponent}>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/why-nk" element={<WhyNK />} />
        {/* <Route path="/web-applications" />
        <Route path="/chrome-extensions" />
        <Route path="/desktop-applications" /> */}
        <Route path="/approach" element={<Approach />} />
        {/* /* <Route path="/contact-us" /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
