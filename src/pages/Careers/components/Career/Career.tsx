import backendDeveloper from 'images/backend_developer.jpg';
import nodeJs from 'images/frontend_developer.jpg';
import javascriptDeveloper from 'images/javascript_developer.jpg';
import reactDeveloper from 'images/women_developer.jpg';

import styles from './Career.module.scss';

const Career = () => {
  return (
    <div className={styles.career_wrapper}>
      <div className={styles.career}>
        <div>
          <img src={reactDeveloper} alt="react developer" />
          <p>Experienced React Developer</p>
        </div>
        <div>
          <img src={nodeJs} alt="node js" />
          <p>Experienced Node js Developer</p>
        </div>
      </div>
      <div className={styles.career}>
        <div>
          <img src={javascriptDeveloper} alt="javascript developer" />
          <p>Middle Javascript Developer</p>
        </div>
        <div>
          <img src={backendDeveloper} alt="backend developer" />
          <p>Senior Backend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
