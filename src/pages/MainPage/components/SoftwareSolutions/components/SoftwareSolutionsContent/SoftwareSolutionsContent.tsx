import webApps from 'images/web-apps.svg';
import desktopApp from 'images/desktop-app.svg';
import googleExtension from 'images/google-extension.svg';

import styles from './SoftwareSolutionsContent.module.scss';

const SoftwareSolutionsContent = () => {
  return (
    <div className={styles.content_wrapper}>
      <div>
        <img src={webApps} alt="web apps" />
        <h3>Web Sites</h3>
        <p>
          We design and develop multi-purpose, data-driven, real-time, high
          performing and efficient mobile-ready web applications.
        </p>
        <div className={styles.more}>
          <span>Learn more...</span>
        </div>
      </div>
      <div>
        <img src={desktopApp} alt="desktop app" />
        <h3>Desktop Application</h3>
        <p>
          We are experts in building large scale, distributed web services,
          APIs, micro-services using a perfect mix of reliable, robust and
          cutting-edge technologies.
        </p>
        <div className={styles.more}>
          <span>Learn more...</span>
        </div>
      </div>
      <div>
        <img src={googleExtension} alt="google extension" />
        <h3>Google Extension</h3>
        <p>
          We build multi-platform mobile applications, whether it will be a
          social network, geo-tracking app, dashboard, booking app, anything -
          you name it.
        </p>
        <div className={styles.more}>
          <span>Learn more...</span>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsContent;
