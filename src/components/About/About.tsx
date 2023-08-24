import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.logo}>
        <h2>N/K</h2>
      </div>
      <p>
        Simply Technologies is a premier software design and development
        company, specialized in web, mobile applications, web services and
        conversational chatbots design and development.{' '}
      </p>
      <p>
        Founded in 2011 by two entrepreneurs with software engineering
        background Simply Technologies successfully designed and developed
        highly performing apps and provided the most innovative solutions to its
        customers.
      </p>
      <h3>MISSION</h3>
      <p>
        To be a premium level technology partner for businesses by taking care
        of their technological challenges thus allowing them to focus on their
        core business and fast growth.
      </p>
      <h3>VISION</h3>
      <p>
        We aim to deliver high quality software solutions and services to all
        our partners using robust, reliable, scalable and at the same time
        cutting-edge technologies. We believe that every business deserves high
        quality software, we are keen to deliver it to all our partners.
      </p>
      <h3>OUR VALUES</h3>
      <div className={styles.ourValues}>
        <li>Transparency</li>
        <li>Honesty</li>
        <li>Equality</li>
        <li>Self-development</li>
        <li>Teamwork</li>
        <li>Diligence</li>
      </div>
    </div>
  );
};

export default About;
