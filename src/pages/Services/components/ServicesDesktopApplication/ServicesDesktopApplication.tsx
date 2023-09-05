import desktopMenu from 'images/menu.png';
import autoUpdater from 'images/auto-updater.png';
import installer from 'images/installer.png';
import appStore from 'images/app-store.png';
import crashReporting from 'images/crash-reporting.png';

import styles from './ServicesDesktopApplication.module.scss';
import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import { formTypes } from '../../../../constants';
import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';

const ServicesDesktopApplication = () => {
  return (
    <div className={styles.desktop_wrapper}>
      <div className={styles.desktop_title}>
        <h2>Desktop development made easy</h2>
      </div>
      <div className={styles.images_wrapper}>
        <div className={styles.desktop_blocks}>
          <div className={styles.block_description}>
            <h4>Native graphical user interfaces</h4>
            <p>
              Interact with your operating system`s interfaces with Electron`s
              main process APIs. Customize your application window appearance,
              control application menus, or alert users through dialogs or
              notifications.
            </p>
          </div>
          <div className={styles.img_wrappers}>
            <img src={desktopMenu} alt="menu" />
          </div>
        </div>
        <div className={styles.desktop_blocks}>
          <div className={styles.img_wrappers}>
            <img src={autoUpdater} alt="menu" />
          </div>
          <div className={styles.block_description}>
            <h4>Native graphical user interfaces</h4>
            <p>
              Interact with your operating system`s interfaces with Electron`s
              main process APIs. Customize your application window appearance,
              control application menus, or alert users through dialogs or
              notifications.
            </p>
          </div>
        </div>
        <div className={styles.desktop_blocks}>
          <div className={styles.block_description}>
            <h4>Native graphical user interfaces</h4>
            <p>
              Interact with your operating system`s interfaces with Electron`s
              main process APIs. Customize your application window appearance,
              control application menus, or alert users through dialogs or
              notifications.
            </p>
          </div>
          <div className={styles.img_wrappers}>
            <img src={installer} alt="menu" />
          </div>
        </div>
        <div className={styles.desktop_blocks}>
          <div className={styles.img_wrappers}>
            <img src={appStore} alt="menu" />
          </div>
          <div className={styles.block_description}>
            <h4>Native graphical user interfaces</h4>
            <p>
              Interact with your operating system`s interfaces with Electron`s
              main process APIs. Customize your application window appearance,
              control application menus, or alert users through dialogs or
              notifications.
            </p>
          </div>
        </div>
        <div className={styles.desktop_blocks}>
          <div className={styles.block_description}>
            <h4>Native graphical user interfaces</h4>
            <p>
              Interact with your operating system`s interfaces with Electron`s
              main process APIs. Customize your application window appearance,
              control application menus, or alert users through dialogs or
              notifications.
            </p>
          </div>
          <div className={styles.img_wrappers}>
            <img src={crashReporting} alt="menu" />
          </div>
        </div>
      </div>
      <ProjectDiteals
        btnTitle={formTypes[FormTypesEnum.desktop].btnTitle}
        formTitle={formTypes[FormTypesEnum.desktop].formTitle}
        formType={FormTypesEnum.desktop}
      />
    </div>
  );
};

export default ServicesDesktopApplication;
