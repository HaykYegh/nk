import { FC } from 'react';
import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';
import { formTypes } from '../../constants';
import styles from './Approach.module.scss';

const Approach: FC = () => {
  return (
    <div className={styles.Approach}>
      <h3>YOUR PROJECT IS ONLY FOUR SIMPLE STEPS AWAY.</h3>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>1</p>
          </div>
          <h4>YOU TELL</h4>
          <p>You Get in Touch with Us and Share Your Project or Idea.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>2</p>
          </div>
          <h4>WE MEET</h4>
          <p>
            Upon receiving your inquiry, we schedule a meeting and arrange a
            video call to delve into the project particulars.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>3</p>
          </div>
          <h4>YOU GET THE PROPOSAL</h4>
          <p>
            We Analyze the Project Scope and Craft a Project Proposal, which is
            then Sent to You for Your Review.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>4</p>
          </div>
          <h4>WE DOCUMENT IT</h4>
          <p>
            Upon Your Approval, We Proceed to Finalize the Contract, Marking the
            Commencement of the Project.
          </p>
        </div>
      </div>
      <ProjectDiteals
        btnTitle={formTypes[FormTypesEnum.approach].btnTitle}
        formTitle={formTypes[FormTypesEnum.approach].formTitle}
        formType={FormTypesEnum.approach}
      />
    </div>
  );
};

export default Approach;
