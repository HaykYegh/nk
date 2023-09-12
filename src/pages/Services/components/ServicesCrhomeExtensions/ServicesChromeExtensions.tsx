import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import styles from './ServicesChromeExtensions.module.scss';
import { formTypes } from '../../../../constants';
import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';

const ServicesChromeExtensions = () => {
  return (
    <div className={styles.chrome_extensions_wrapper}>
      <div className={styles.chrome_extensions_description}>
        <p>What is a Chrome Extension?</p>
        <p>
          A Chrome extension is a software program that enhances user experience
          and customizes browser behavior. It`s designed to work seamlessly with
          the Google Chrome browser.
        </p>
        <p>What Can It Do?</p>
        <p>
          Chrome extensions can perform various tasks, from blocking ads to
          customizing web pages. They&#39;re developed using web technologies
          like HTML, CSS, and JavaScript, or languages that compile to
          JavaScript like TypeScript or Dart. For instance, ad-blocking
          extensions detect specific words in a webpage`s HTML (e.g.,{' '}
          {`""ads""`}, {`""advertisement""`}) and remove corresponding elements
          from the DOM, improving browsing.
        </p>
        <p>How Can We Use It?</p>
        <p>
          Creating a Chrome extension typically requires minimal code, often
          around 10-12 lines, but a key component is the configuration file
          (manifest.json). This file specifies permissions, activation
          conditions, entry points, and more. The development process closely
          resembles web development, making it accessible if you`re already
          familiar with web technologies. Once developed, extensions can be
          published to the [Google Extension
          Store](https://chrome.google.com/webstore/category/extensions?utm_source=chrome-ntp-icon),
          where users can download, install, and utilize them in their browsers.
        </p>
        <p>
          In essence, Chrome extensions are versatile tools that enrich browsing
          experiences and can be easily developed and shared with the wider
          Chrome user community.
        </p>
      </div>
      <ProjectDiteals
        btnTitle={formTypes[FormTypesEnum.chrome].btnTitle}
        formTitle={formTypes[FormTypesEnum.chrome].formTitle}
        formType={FormTypesEnum.chrome}
      />
    </div>
  );
};

export default ServicesChromeExtensions;
