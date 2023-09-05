import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink as Link, useLocation } from 'react-router-dom';

import styles from './Sidebar.module.scss';

interface IProps {
  isSidebarActive: boolean;
}

const Sidebar: FC<IProps> = ({ isSidebarActive }) => {
  const [isServicesActive, setServicesActive] = useState(false);
  const location = useLocation();
  const showServicesHandler = () => {
    setServicesActive((prev) => !prev);
  };

  useEffect(() => {
    setServicesActive(false);
  }, [location.pathname]);

  return (
    <div
      className={`${styles.Sidebar} ${isSidebarActive && styles.sideActive}`}
    >
      <div className={styles.sideMenuWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.section}>
            <Link to="/">MAIN PAGE</Link>
          </div>
          <div className={styles.section}>
            <Link to="/why-nk">WHY NK?</Link>
          </div>
          <div onClick={showServicesHandler} className={styles.section}>
            <i
              className={classNames('fa-solid', 'fa-caret-right', {
                'fa-rotate-90': isServicesActive,
              })}
            ></i>{' '}
            SERVICES
          </div>
          {isServicesActive && (
            <div className={styles.servicesSubMenu}>
              <Link to="/web-applications">WEB APPS</Link>
              <Link to="/chrome-extensions">CHROME EXTENSIONS</Link>
              <Link to="/desktop-applications">DESKTOP APPS</Link>
            </div>
          )}

          <div className={styles.section}>
            <Link to="/contact-us">CONTACT US</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
