import { Career } from './components/Career';
import { CareerVideo } from './components/CareerVideo';

import styles from './Careers.module.scss';

const Careers = () => {
  return (
    <div className={styles.careers_wrapper}>
      <div className={styles.careers_header}>
        <h2>We are looking for someone like you!</h2>
        <p>
          Love JavaScript? Looking for a challenge? Enjoy working with a
          creative and innovative team? We are glad to welcome you into our big
          team of the coolest software engineers.
        </p>
      </div>
      <Career />
      <CareerVideo />
      <div className={styles.careers_footer}>
        <p>
          Didn`t find a position that fits your skills? no worries, send us your
          cv end we`ll keep your resume for future references.
        </p>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Careers;
