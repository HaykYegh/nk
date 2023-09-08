import { NavLink as Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.socialMedia}>
        <Link to="/" className={styles.mediaIcon}>
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link to="/" className={styles.mediaIcon}>
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to="/" className={styles.mediaIcon}>
          <i className="fa-regular fa-envelope"></i>
        </Link>
        <Link to="/" className={styles.mediaIcon}>
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </div>
      <div className={styles.navigations}>
        <Link to="/contact-us">CONTACT US</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/approach">APPROACH</Link>
      </div>
      <div className={styles.address}>
        N/K IT COMPANY, TUMANYAN STREET 3, YEREVAN, ARMENIA +(374) 98 188907
        INFO@NKCOMPANY.NET
      </div>
    </div>
  );
};

export default Footer;
