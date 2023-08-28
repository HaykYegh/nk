import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import styles from './TellUsAboutProject.module.scss';
import { caseForm } from '../../../../constants';
import { ProjectType } from 'globalTypes/projectDitealsTypes';

const TellUsAboutProject = () => {
  return (
    <div className={styles.tell_us_about_wrapper}>
      <div>
        <hr />
      </div>
      <div className={styles.title_and_content}>
        <h2>Tell us about your project</h2>
        <p>
          Whether you are developing a web or mobile application, chatbot, api,
          looking for a strong technical support or consulting, having troubles
          with scaling your existing application or just have an idea, we are
          keen to learn more.
        </p>
      </div>

      <ProjectDiteals
        btnTitle={caseForm[ProjectType.global].btnTitle}
        formTitle={caseForm[ProjectType.global].formTitle}
        checkBoxShow={true}
      />
    </div>
  );
};

export default TellUsAboutProject;
