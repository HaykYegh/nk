import React, { FC } from 'react';
import styles from './Header.module.scss';
import { NavLink as Link } from 'react-router-dom';
import { Logo } from '../Logo';

interface IProps {
  isSidebarActive: boolean;
  handleSidebar: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: FC<IProps> = ({ isSidebarActive, handleSidebar }) => {
  return (
    <div className={styles.Header}>
      <Logo />
      <nav>
        <div className={styles.section}>
          <Link to="/">WHY NK?</Link>
        </div>
        <div className={styles.section}>
          <Link to="/">SERVICES</Link>
          <div className={styles.hoverPopup}>
            <Link to="/">WEB APPLICATIONS</Link>
            <Link to="/">CHROME EXTENTIONS</Link>
            <Link to="/">DESKTOP APPLICATIONS</Link>
          </div>
        </div>
        <div className={styles.section}>
          <Link to="/">CONTACT US</Link>
        </div>
      </nav>
      <button onClick={handleSidebar} className={styles.burgerMenu}>
        <div
          className={`${styles.burger} ${
            isSidebarActive && styles.burgerActive
          }`}
        >
          <span className={`${isSidebarActive && styles.activeSpan}`}></span>
        </div>
      </button>
    </div>
  );
};

export default Header;
