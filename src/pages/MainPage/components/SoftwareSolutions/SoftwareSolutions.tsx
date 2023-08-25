import { SoftwareSolutionsContent } from './components/SoftwareSolutionsContent';

import styles from './SoftwareSolutions.module.scss';

const SoftwareSolutions = () => {
  return (
    <div className={styles.software_solutions_wrapper}>
      <div className={styles.title}>
        <h1>WE DESIGN, CREATE AND DEPLOY SOFTWARE SOLUTIONS</h1>
      </div>
      <SoftwareSolutionsContent />
    </div>
  );
};

export default SoftwareSolutions;
