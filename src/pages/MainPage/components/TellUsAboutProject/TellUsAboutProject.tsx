import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import styles from './TellUsAboutProject.module.scss';
import { formTypes } from '../../../../constants';
import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';

const TellUsAboutProject = () => {
  return (
    <div className={styles.tell_us_about_wrapper}>
      <div>
        <hr />
      </div>
      <div className={styles.title_and_content}>
        <h2>Share Your Project Details</h2>
        <p>
          Whether you`re in the midst of crafting a web or mobile application,
          chat-bot, API, in search of robust technical support or consulting
          services, facing challenges with scaling your current application, or
          just brimming with an innovative concept, we`re eager to delve deeper
          into your requirements and objectives.
        </p>
      </div>

      <ProjectDiteals
        btnTitle={formTypes[FormTypesEnum.global].btnTitle}
        formTitle={formTypes[FormTypesEnum.global].formTitle}
        formType={FormTypesEnum.global}
      />
    </div>
  );
};

export default TellUsAboutProject;
