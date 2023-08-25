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
          <h4>expertise</h4>
          <p>
            We have been in the software development and design industry for
            more than 11 years. We made JavaScript into our superpower and we
            constantly grow.
          </p>
        </div>
        <div>
          <img src={transparency} alt="transparency" />
          <h4>transparency</h4>
          <p>
            Being transparent in the development process is crucial for any
            product success. You can follow what we do, when we do and how we do
            it in real-time
          </p>
        </div>
        <div>
          <img src={symplicity} alt="symplicity" />
          <h4>symplicity</h4>
          <p>
            Working with us is simple and easy. We deliver end-to-end
            development services by taking care of all the technological
            responsibilities of our partners.
          </p>
        </div>
      </div>
      <button onClick={linkToNk}>Learn More About Benefits</button>
    </div>
  );
};

export default Benefits;
