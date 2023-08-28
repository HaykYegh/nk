import LeftContent from './components/LeftContent';
import OurOfficeMap from './components/OurOfficeMap';

import styles from './OurOffice.module.scss';

const OurOffice = () => {
  return (
    <div className={styles.our_office_wrapper}>
      <div className={styles.border}>
        <hr />
      </div>
      <div className={styles.title}>
        <h2>Contacts</h2>
      </div>
      <div className={styles.map_and_leftContent_wrapper}>
        <LeftContent />
        <OurOfficeMap />
      </div>
    </div>
  );
};

export default OurOffice;
