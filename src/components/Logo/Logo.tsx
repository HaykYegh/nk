import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={styles.Logo}>
      <div>N</div>
      <div>K</div>
    </Link>
  );
};

export default Logo;
