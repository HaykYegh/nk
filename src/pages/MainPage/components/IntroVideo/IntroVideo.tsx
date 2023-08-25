import { useState } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { videoUrl } from '../../../../constants';

import styles from './IntroVideo.module.scss';

const IntroVideo = () => {
  const [activeVideo, setActiveVideo] = useState(false);

  const handleClickVideo = () => {
    setActiveVideo(true);
  };

  return (
    <div className={styles.video_wrapper}>
      {!activeVideo ? (
        <div
          onClick={handleClickVideo}
          className={classNames(styles.deActive, {
            [styles.deActive]: activeVideo,
          })}
        >
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      ) : (
        <>
          <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </>
      )}
      <button>Contact us now</button>
      <div id={styles.border}>
        <hr />
      </div>
    </div>
  );
};

export default IntroVideo;
