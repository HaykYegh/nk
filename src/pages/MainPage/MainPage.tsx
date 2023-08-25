import { SoftwareSolutions } from './components/SoftwareSolutions';
import { OurOffice } from '../../components/OurOffice';
import { IntroVideo } from './components/IntroVideo';
import { Portfolio } from './components/Portfolio';
import { OurBenefits } from './components/OurBenefits';
import { TellUsAboutProject } from './components/TellUsAboutProject';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main_page_wrapper}>
      <SoftwareSolutions />
      <IntroVideo />
      <Portfolio />
      <OurBenefits />
      <OurOffice />
      <TellUsAboutProject />
    </div>
  );
};

export default MainPage;
