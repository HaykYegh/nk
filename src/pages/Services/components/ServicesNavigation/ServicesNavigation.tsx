import { useEffect, useState } from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import { ServicesPathNames } from '../../../../constants';

import styles from './ServicesNavigation.module.scss';

const ServicesNavigation = () => {
  const [linkClassNames, setLinksClassNames] = useState(ServicesPathNames.web);
  const { pathname } = useLocation();

  const handleChangeLocation = () => {
    setLinksClassNames(pathname);
  };

  useEffect(() => {
    console.log(linkClassNames);
  }, [pathname]);

  return (
    <div className={styles.services_navigation_wrapper}>
      <h2>Services</h2>
      <div className={styles.links_wrapper}>
        <Link
          className={
            linkClassNames === ServicesPathNames.web || pathname === '/'
              ? styles.active
              : ''
          }
          onClick={handleChangeLocation}
          to="/web-applications"
        >
          Web Applications
        </Link>
        <Link
          className={
            linkClassNames === ServicesPathNames.chrome ? styles.active : ''
          }
          onClick={handleChangeLocation}
          to="/chrome-extensions"
        >
          Chrome Extensions
        </Link>
        <Link
          className={
            linkClassNames === ServicesPathNames.desktop ? styles.active : ''
          }
          onClick={handleChangeLocation}
          to="/desktop-applications"
        >
          Desktop Applications
        </Link>
      </div>
    </div>
  );
};

export default ServicesNavigation;
