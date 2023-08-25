import { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { ServicesPathNames } from '../../../../constants';
import { IServicesNavigationTypes } from './ServicesNavigationTypes';

import styles from './ServicesNavigation.module.scss';

const ServicesNavigation: FC<IServicesNavigationTypes> = ({
  servicesPathName,
}) => {
  return (
    <div className={styles.services_navigation_wrapper}>
      <h2>Services</h2>
      <div className={styles.links_wrapper}>
        <Link
          className={
            servicesPathName === ServicesPathNames.web ||
            servicesPathName === '/'
              ? styles.active
              : ''
          }
          to="/web-applications"
        >
          Web Applications
        </Link>
        <Link
          className={
            servicesPathName === ServicesPathNames.chrome ? styles.active : ''
          }
          to="/chrome-extensions"
        >
          Chrome Extensions
        </Link>
        <Link
          className={
            servicesPathName === ServicesPathNames.desktop ? styles.active : ''
          }
          to="/desktop-applications"
        >
          Desktop Applications
        </Link>
      </div>
    </div>
  );
};

export default ServicesNavigation;
