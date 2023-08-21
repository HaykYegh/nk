import React, { useState } from 'react';
import styles from './Header.module.scss';
import { NavLink as Link } from 'react-router-dom';
import { Logo } from '../Logo';

const Header = () => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const burgerHandler = () => setBurgerActive((prev) => !prev);
  return (
    <div className={styles.Header}>
      <Logo />
      <nav>
        <div className={styles.section}>WHY NK?</div>
        <div className={styles.section}>
          <Link to="/">SERVICES</Link>
          <div className={styles.hoverPopup}>
            <Link to="/">WEB APPLICATIONS</Link>
            <Link to="/">CHROME EXTENTIONS</Link>
            <Link to="/">DESKTOP APPLICATIONS</Link>
          </div>
        </div>
        <div className={styles.section}>CONTACT US</div>
      </nav>
      <button onClick={burgerHandler} className={styles.burgerMenu}>
        <div
          className={`${styles.burger} ${
            isBurgerActive && styles.burgerActive
          }`}
        >
          <span className={`${isBurgerActive && styles.activeSpan}`}></span>
        </div>
      </button>
    </div>
  );
};

export default Header;
