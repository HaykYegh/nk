import styles from './WhyNK.module.scss';

const WhyNK = () => {
  return (
    <div className={styles.whyNK}>
      <h1>Because...</h1>
      <div className={styles.succsess}>
        <div className={styles.imgBlock}>
          <img
            src="https://img.freepik.com/free-photo/smiley-man-with-tablet_23-2148560445.jpg"
            alt=""
          />
        </div>
        <div className={styles.succsess_textBlock}>
          <h2>YOUR SUCCESS IS OUR VICTORY</h2>
          <p>
            We do our best to make every project a triumph. We see every
            collaboration as a mutual reinforcement and thus we route all of our
            efforts to the successful completion of our projects.{' '}
          </p>
          <p className={styles.twoP}>
            Simply team aims to amaze you with our work and leave you with
            positive memories of us. Your post-development recommendation is the
            evaluation of our daily work and our motivation to evolve. We value
            your experience with us as, as well as your feedback. The feedback
            will help us to grow and evolve further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyNK;
