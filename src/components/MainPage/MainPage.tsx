import { SoftwareSolutions } from './components/SoftwareSolutions';
import { OurOffice } from '../OurOffice';
import { IntroVideo } from './components/IntroVideo';
import { Portfolio } from './components/Portfolio';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main_page_wrapper}>
      <SoftwareSolutions />
      <IntroVideo />
      <Portfolio />
      <OurOffice />
    </div>
  );
};

export default MainPage;
