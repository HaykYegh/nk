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
            React stands as a declarative, nimble, and adaptable JavaScript
            library, purpose-built for the development of user interfaces.
            Backed by the collective efforts of Facebook, Instagram, and a
            dynamic community comprising individual developers and esteemed
            corporations, React continues to flourish.
          </p>
        </div>
        <div>
          <img src={nodeJs} alt="node js" />
          <h2>Node js</h2>
          <p>
            Node.js is a versatile, efficient, and scalable runtime environment
            for building server-side and network applications. Its key strengths
            include asynchronous, non-blocking operations, a rich ecosystem of
            packages, cross-platform compatibility, and strong community
            support. It`s ideal for real-time and data streaming applications,
            as well as serverless and proxy server use cases.
          </p>
        </div>
        <div>
          <img src={expressJs} alt="express js" />
          <h2>Express js</h2>
          <p>
            Express.js is widely used in the Node.js ecosystem for building web
            applications, RESTf ul APIs, and microservices due to its
            simplicity, flexibility, and extensive community support. It
            empowers developers to create efficient and feature-rich
            applications while allowing them the freedom to choose the
            components they need.
          </p>
        </div>
      </div>
      <div className={styles.footer_title}>
        <h2>Which Framework to Choose?</h2>
        <p>
          The choice of framework primarily hinges on your project`s nature. For
          intricate applications, we often favour the React/Redux duo, while for
          more streamlined ones, Vue is a top pick. If you`re already invested
          in Angular 2+ for your codebase, transitioning to a new framework may
          not be a pragmatic move.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
