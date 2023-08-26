import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import {
  manDeveloperImg,
  matureImg,
  oficeImg,
  superPowerImg,
} from '../../constants';

import styles from './WhyNK.module.scss';

const WhyNK = () => {
  return (
    <div className={styles.whyNK}>
      <h1>Because...</h1>
      <div className={styles.becauseBlocks}>
        <div className={styles.imgBlock}>
          <img src={manDeveloperImg} />
        </div>
        <div className={styles.succsess_textBlock}>
          <h2>YOUR SUCCESS IS OUR VICTORY</h2>
          <p>
            We do our best to make every project a triumph. We see every
            collaboration as a mutual reinforcement and thus we route all of our
            efforts to the successful completion of our projects.{' '}
          </p>
          <p>
            Simply team aims to amaze you with our work and leave you with
            positive memories of us. Your post-development recommendation is the
            evaluation of our daily work and our motivation to evolve. We value
            your experience with us as, as well as your feedback. The feedback
            will help us to grow and evolve further.
          </p>
        </div>
      </div>
      <div className={styles.becauseBlocks}>
        <div className={styles.succsess_textBlock}>
          <h2>JAVASCRIPT IS OUR SUPERPOWER</h2>
          <p>
            At Simply we believe that our focus is the key to our mastery.
            Simply picked a fast developing technology and mastered it, making
            our company home for the best JS experts who strive for excellence
            and innovation. We always perfect our knowledge in JS and use it to
            create high-quality and trustworthy code.
          </p>
        </div>
        <div className={styles.imgBlock}>
          <img src={superPowerImg} alt="" />
        </div>
      </div>
      <div className={styles.becauseBlocks}>
        <div className={styles.imgBlock}>
          <img src={oficeImg} alt="" />
        </div>
        <div className={styles.succsess_textBlock}>
          <h2>COMMUNICATION IS VITAL FOR USY</h2>
          <p>
            Our team values communication during the creating process and loves
            to stay connected with our customers even after the project has been
            successfully completed. Keeping you updated about what we do is a
            priority for us. Sharing our work process with you step by step
            makes us more confident and motivates us to amaze you throughout the
            completion of our projects. Our team of JS experts keeps you
            informed and connected to your project development by sending you
            weekly/biweekly demos. You always have access to daily statuses and
            code updates while keeping an internal Slack communication.
          </p>
        </div>
      </div>
      <div className={styles.becauseBlocks}>
        <div className={styles.succsess_textBlock}>
          <h2>WE ARE PROFESSIONALLY MATURE</h2>
          <p>
            Simply has more than 11 years experience of providing outsourcing to
            Australia and the USA. Our company showed 28% growth in the last 3
            years. By creating successful projects, we have gained trust among
            startups and founders in these countries ensuring long-term
            partnerships and relations with our customers. The fact that 87% of
            our clients came back for another project, makes us feel proud.
          </p>
        </div>
        <div className={styles.imgBlock}>
          <img src={matureImg} alt="" />
        </div>
      </div>
      <ProjectDiteals
        btnTitle="REQUEST A QUOTE"
        formTitle="Tell us about your project"
        checkBoxShow={true}
      />
    </div>
  );
};

export default WhyNK;
