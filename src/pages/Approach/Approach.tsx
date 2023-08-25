import React, { FC } from 'react';

import styles from './Approach.module.scss';

const Approach: FC = () => {
  return (
    <div className={styles.Approach}>
      <h3>YOUR PROJECT IS JUST 4 EASY AND SIMPLE STEPS AWAY.</h3>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>1</p>
          </div>
          <h4>YOU TELL</h4>
          <p>You contact us and tell us about your project or idea.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>2</p>
          </div>
          <h4>WE MEET</h4>
          <p>
            After getting your request we set a meeting and hold a video call to
            discuss the project details.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>3</p>
          </div>
          <h4>YOU GET THE PROPOSAL</h4>
          <p>
            Analyzing the project scope we prepare the project proposal and send
            it to you to review.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>
            <p>4</p>
          </div>
          <h4>WE DOCUMENT IT</h4>
          <p>
            After your confirmation we sign the contract and the project starts.
          </p>
        </div>
      </div>
      <button className={styles.tellBtn}>TELL US ABOUT YOUR PROJETC</button>
    </div>
  );
};

export default Approach;
