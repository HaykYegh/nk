import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import { Technologies } from './components/Technologies';

import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';
import { formTypes } from '../../../../constants';
import styles from './ServicesDescription.module.scss';

const ServicesDescription = () => {
  return (
    <div className={styles.services_description}>
      <div className={styles.title_description}>
        <p>
          By building full featured, highly scalable and robust web apps, Simply
          team provides a strategy for you to be effectively presented to your
          target audience, on desktop, tablet or mobile web apps, which would be
          designed to look great, function perfectly and be user-optimised for
          any device and operating system. Our team creates a next generation
          user experience with our cutting-edge technology.
        </p>
      </div>
      <Technologies />
      <div className={styles.services_footer}>
        <div className={styles.text_wrapper}>
          <div className={styles.left_content}>
            <h2>Tools</h2>
            <p>
              The process of building stable, maintainable web applications
              highly depends on the right tools used.
            </p>
            <p>
              <strong>Source Control:</strong> Git - Github/Bitbucket
            </p>
            <p>
              <strong>ES6/7 Translators:</strong> Babel
            </p>
            <p>
              <strong>Builders/Bundlers:</strong> Webpack, Gulp
            </p>
            <p>
              <strong>CSS Preprocessors:</strong> PostCSS, Stylus, Sass, Less
            </p>
          </div>
          <div className={styles.right_content}>
            <h2>Unit and Integration Testing</h2>
            <h4>React</h4>
            <p>
              <strong>Unit Testing: </strong> Jest, Ava, Mocha & Wallaby.js for
              TDD
            </p>
            <p>
              <strong>E2E Testing:</strong> Nightwatch.js
            </p>
            <h4>ANGULAR AND VUE</h4>
            <p>
              <strong>Unit Testing:</strong> Karma, Jasmin
            </p>
            <p>
              <strong>E2E Testing:</strong> Protractor
            </p>
          </div>
        </div>
        <ProjectDiteals
          btnTitle={formTypes[FormTypesEnum.webApp].btnTitle}
          formTitle={formTypes[FormTypesEnum.webApp].formTitle}
          formType={FormTypesEnum.webApp}
        />
      </div>
    </div>
  );
};

export default ServicesDescription;
