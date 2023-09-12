import webApps from 'images/web-apps.svg';
import desktopApp from 'images/desktop-app.svg';
import googleExtension from 'images/google-extension.svg';
import { NavLink as Link } from 'react-router-dom';
import styles from './SoftwareSolutionsContent.module.scss';

const SoftwareSolutionsContent = () => {
  return (
    <div className={styles.content_wrapper}>
      <div>
        <img src={webApps} alt="web apps" />
        <h3>Web Applications</h3>
        <p>
          We specialize in crafting versatile, data-powered, real-time,
          high-performance, and mobile-responsive web applications.
        </p>
        <div className={styles.more}>
          <Link to="/web-applications">Learn more...</Link>
        </div>
      </div>
      <div>
        <img src={desktopApp} alt="desktop app" />
        <h3>Desktop Application</h3>
        <p>
          Our expertise lies in constructing expansive, distributed web
          services, APIs, and microservices, blending a flawless combination of
          dependable, resilient, and leading-edge technologies.
        </p>
        <div className={styles.more}>
          <Link to="/desktop-applications">Learn more...</Link>
        </div>
      </div>
      <div>
        <img src={googleExtension} alt="google extension" />
        <h3>Google Extension</h3>
        <p>
          We specialize in developing cross-platform mobile applications,
          whether it`s a social networking tool, a geo-tracking application, a
          comprehensive dashboard, a booking system, or virtually any other
          concept you can envision.
        </p>
        <div className={styles.more}>
          <Link to="/chrome-extensions">Learn more...</Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsContent;
