import symplicity from 'images/Simplicity.svg';
import transparency from 'images/Transparency.svg';
import expertise from 'images/Expertise.svg';

import styles from './Benefits.module.scss';
import { useNavigate } from 'react-router-dom';

const Benefits = () => {
  const navigate = useNavigate();

  const linkToNk = () => {
    navigate('/contact-us');
  };
  return (
    <div className={styles.benefits_wrapper}>
      <div className={styles.content_wrapper}>
        <div>
          <img src={expertise} alt="expertise" />
          <h4>Proficiency</h4>
          <p>
            With over 5 years of experience in the software development and
            design sector, we&#39;ve transformed JavaScript into our superpower,
            and our journey of continuous growth continues unabated.
          </p>
        </div>
        <div>
          <img src={transparency} alt="transparency" />
          <h4>Clarity</h4>
          <p>
            Transparency throughout the development process is paramount to the
            success of any product. You can closely track our actions, timing,
            and methodologies in real-time, ensuring complete visibility into
            our work.
          </p>
        </div>
        <div>
          <img src={symplicity} alt="symplicity" />
          <h4>Simplicity</h4>
          <p>
            Collaborating with us is a straightforward and hassle-free
            experience. We provide comprehensive development services, assuming
            full responsibility for all technological aspects on behalf of our
            partners.
          </p>
        </div>
      </div>
      <button onClick={linkToNk}>Learn More About Benefits</button>
    </div>
  );
};

export default Benefits;
