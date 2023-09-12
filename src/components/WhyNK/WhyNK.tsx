import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';
import {
  manDeveloperImg,
  matureImg,
  oficeImg,
  superPowerImg,
} from '../../constants';

import styles from './WhyNK.module.scss';
import { FormTypesEnum } from 'globalTypes/projectDitealsTypes';

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
          <h2>Effective Communication is Paramount to Us.</h2>
          <p>
            Within our team, communication is highly regarded throughout the
            creative journey, and our commitment to staying connected with our
            clients extends well beyond the project&#39;s successful completion.
            Keeping you informed about our progress remains a top priority.
            Sharing the intricacies of our work process with you, step by step,
            instills in us the confidence and inspiration to continually impress
            you throughout the project&#39;s execution. Our ensemble of
            JavaScript experts ensures that you are constantly engaged and
            informed about the development of your project. We provide weekly or
            biweekly demos to keep you in the loop, ensuring transparency and
            alignment with your vision. Furthermore, you maintain access to
            daily project statuses and code updates through our dedicated
            internal Slack communication channels. Your involvement and insight
            are fundamental to our collaborative success.
          </p>
        </div>
      </div>
      <div className={styles.becauseBlocks}>
        <div className={styles.succsess_textBlock}>
          <h2>We Embrace Professional Expertise.</h2>
          <p>
            With over 5 years of dedicated experience in delivering outsourcing
            solutions to clients in Australia, Canada, Ukraine and the USA, N/K
            has consistently showcased exceptional growth, boasting an
            impressive 31% increase in the past three years alone. Our
            commitment to crafting successful projects has not only garnered the
            trust of startups and founders in these regions but has also forged
            enduring partnerships and relationships with our valued clientele.
            It is a source of immense pride for us that a remarkable 84% of our
            clients have chosen to return for subsequent projects, reaffirming
            our unwavering dedication to excellence.
          </p>
        </div>
        <div className={styles.imgBlock}>
          <img src={matureImg} alt="" />
        </div>
      </div>
      <ProjectDiteals
        btnTitle="REQUEST A QUOTE"
        formTitle="Tell us about your project"
        formType={FormTypesEnum.whyNk}
      />
    </div>
  );
};

export default WhyNK;
