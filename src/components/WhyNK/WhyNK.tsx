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
          <h2>Your triumph is our achievement.</h2>
          <p>
            We dedicate ourselves to transforming each project into a resounding
            success. Every partnership we engage in is a reciprocal
            strengthening, and therefore, we channel all our energies toward the
            triumphant fruition of our endeavours.{' '}
          </p>
          <p>
            Our team strives to impress you with our work, leaving you with
            memorable and positive experiences. Your post-project endorsement is
            a testament to our daily efforts and serves as a catalyst for our
            continuous improvement. We deeply appreciate your journey with us
            and the valuable insights you provide. Your feedback fuels our
            growth and propels us towards even greater heights.
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
          <h2>JavaScript Empowers Us</h2>
          <p>
            At N/K, we firmly hold the belief that our dedication to a singular
            focus is the cornerstone of our expertise. We&#39;ve chosen a
            rapidly evolving technology and honed our skills to mastery,
            establishing our company as the haven for the finest JavaScript
            experts who are unwavering in their pursuit of excellence and
            ground-breaking innovations. Our commitment to perpetual refinement
            in JavaScript knowledge is our driving force, enabling us to craft
            code that is not just of the highest quality but also the most
            dependable and trustworthy.
          </p>
        </div>
        <div className={styles.imgBlock}>
          <img src={matureImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyNK;
