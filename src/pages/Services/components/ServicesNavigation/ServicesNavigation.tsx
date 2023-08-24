import { NavLink as Link } from 'react-router-dom';

import styles from './ServicesNavigation.module.scss';

const ServicesNavigation = () => {
  return (
    <div className={styles.services_navigation_wrapper}>
      <h2>Services</h2>
      <div className={styles.links_wrapper}>
        <Link to="/web-applications">Web Applications</Link>
        <Link to="/chrome-extensions">Chrome Extensions</Link>
        <Link to="/desktop-applications">Desktop Applications</Link>
      </div>
    </div>
  );
};

export default ServicesNavigation;
