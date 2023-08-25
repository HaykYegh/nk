import { careerFirstUrl, careerSecondUrl } from '../../../../constants';

import styles from './CareerVideo.module.scss';

const CareerVideo = () => {
  return (
    <div className={styles.videos_wrapper}>
      <div className={styles.video_block}>
        <div id={styles.top_content} className={styles.top_block_text_content}>
          <h2>Let’s do great things together!</h2>
          <p>
            Simply Technologies is one of the leaders in the IT outsourcing
            market in Armenia. This is a place where trust, transparency and
            openness are everything. We are looking for people who share our
            values and our desire to create products that will improve and
            simplify people`s lives.
          </p>
        </div>
        <div className={styles.video_wrapper}>
          <iframe
            src={careerFirstUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.video_block}>
        <div className={styles.video_wrapper}>
          <iframe
            src={careerSecondUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          id={styles.bottom_content}
          className={styles.top_block_text_content}
        >
          <h2>What is the simply technologies interview process like?</h2>
          <p>
            We understand that hiring can seem very overwhelming, but we don`t
            want you to feel that way at Simply.
          </p>
          <p>
            With this in mind, we have created a video to help you become aware
            of our hiring processes and feel more confident about it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerVideo;
