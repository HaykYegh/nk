import nodeJs from 'images/node-js.svg';
import reactImg from 'images/react.svg';
import expressJs from 'images/express.svg';

import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <div className={styles.technologies_wrapper}>
      <div className={styles.tech_wrapper}>
        <div>
          <img src={reactImg} alt="react" />
          <h2>React</h2>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It is maintained by{' '}
            <strong> Facebook, Instagram</strong> and a community of individual
            developers and corporations.
          </p>
        </div>
        <div>
          <img src={nodeJs} alt="node js" />
          <h2>Node js</h2>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It is maintained by Facebook,
            Instagram and a community of individual developers and corporations.
          </p>
        </div>
        <div>
          <img src={expressJs} alt="express js" />
          <h2>Express js</h2>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It is maintained by Facebook,
            Instagram and a community of individual developers and corporations.
          </p>
        </div>
      </div>
      <div className={styles.footer_title}>
        <h2>Which Framework?</h2>
        <p>
          Which framework to use mostly depends on the type of application you
          are building. In most cases we will recommend React/Redux combination
          for complex apps and Vue for smaller ones. If your code base is
          already in Angular 2+, it doesn`t make sense to replace it.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
