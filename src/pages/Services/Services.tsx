import { ServicesNavigation } from './components/ServicesNavigation';
import { ServicesDescription } from './components/ServicesDescription';

import styles from './Services.module.scss';

const Services = () => {
  return (
    <div className={styles.services_wrapper}>
      <ServicesNavigation />
      <ServicesDescription />
    </div>
  );
};

export default Services;
