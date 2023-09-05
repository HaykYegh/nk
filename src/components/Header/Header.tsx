import { FC, MouseEvent, useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import Logo from '../Logo';
import classNames from 'classnames';

import styles from './Header.module.scss';

interface IProps {
  isSidebarActive: boolean;
  handleSidebar: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Header: FC<IProps> = ({ isSidebarActive, handleSidebar }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setPrevScrollY(currentScrollY);
    if (currentScrollY < prevScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setPrevScrollY(currentScrollY);
  };

  return (
    <div
      className={
        isVisible
          ? `${styles.Header} ${styles.show}`
          : `${styles.Header} ${styles.hide}`
      }
    >
      <Logo />
      <nav>
        <div className={styles.section}>
          <Link to="/why-nk">WHY NK?</Link>
        </div>
        <div className={styles.section}>
          <Link to="/web-applications">SERVICES</Link>
          <div className={styles.hoverPopup}>
            <Link to="/web-applications">WEB APPLICATIONS</Link>
            <Link to="/chrome-extensions">CHROME EXTENSIONS</Link>
            <Link to="/desktop-applications">DESKTOP APPLICATIONS</Link>
          </div>
        </div>
        <div className={styles.section}>
          <Link to="/contact-us">CONTACT US</Link>
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
