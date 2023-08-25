import { Benefits } from './components/Benefits';

import styles from './OurBenefits.module.scss';

const OurBenefits = () => {
  return (
    <div className={styles.our_benefits_wrapper}>
      <div>
        <hr />
      </div>
      <div className={styles.title}>
        <h2>Work with us is beneficial course</h2>
      </div>
      <Benefits />
    </div>
  );
};

export default OurBenefits;
