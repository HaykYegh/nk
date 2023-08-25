import { bryceImg, dennisImg, volodymyrImg } from '../../constants/index';
import styles from './OurTeam.module.scss';

const OurTeam = () => {
  return (
    <div className={styles.ourTeamBlock}>
      <h2>SUCCESS STORIES FROM OUR PARTNERS</h2>
      <div className={styles.wrapper}>
        <div className={styles.personBlock}>
          <div className={styles.imgBlock}>
            <img src={dennisImg} alt="" />
          </div>
          <p>
            <strong>Dennis Jungerius</strong>, ounder Digi-Connect, Rotterdam 🇳🇱
          </p>
          <div className={styles.personInfo}>
            <p>
              {`"`}I`ve had the pleasure of working with 7 people from Simply
              and they`ve always been hard workers with a great depth of skills.
              I`d recommend Simply Technologies to anyone looking for JS
              engineers. {`"`}
            </p>
          </div>
        </div>
        <div className={styles.personBlock}>
          <div className={styles.imgBlock}>
            <img src={volodymyrImg} alt="" />
          </div>
          <p>
            <strong>Volodymyr Khokhlachov,</strong>, co-founder Models Can
            Smile, New York 🇺🇸
          </p>
          <div className={styles.personInfo}>
            <p>
              {`"`}Simply Technologies is a company with a clear and open
              vision. Their team of developers have great technical expertise
              and experiencing, but also think together with us, as a customer
              to make great software solutions.{`"`}
            </p>
          </div>
        </div>
        <div className={styles.personBlock}>
          <div className={styles.imgBlock}>
            <img src={bryceImg} alt="" />
          </div>
          <p>
            <strong>Bryce York</strong>, co-founder Radframe, Sydney 🇦🇺
          </p>
          <div className={styles.personInfo}>
            <p>
              {`"`}Simply team is very knowledgeable about all aspects of system
              architecture and design. We had a complex task of building a
              mobile app for the fashion industry from the ground up and the
              team has helped us in all aspects. {`"`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
