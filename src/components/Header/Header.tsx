import React, { FC } from 'react';
import styles from './Header.module.scss';
import { NavLink as Link } from 'react-router-dom';
import { Logo } from '../Logo';
import classNames from 'classnames';

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
            <Link to="/">CHROME EXTENSIONS</Link>
            <Link to="/">DESKTOP APPLICATIONS</Link>
          </div>
        </div>
        <div className={styles.section}>
          <Link to="/">CONTACT US</Link>
        </div>
      </nav>
      <button onClick={handleSidebar} className={styles.burgerMenu}>
        <div
          className={classNames(styles.burger, {
            [styles.burgerActive]: isSidebarActive,
          })}
        >
          <span
            className={classNames({ [styles.activeSpan]: isSidebarActive })}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default Header;
