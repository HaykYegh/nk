import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { SliderData } from '../../../../../../constants';

import styles from './PortfolioSlider.module.scss';
import { getNextId } from '../../../../../../helpers/getNextImg';

const PortfolioSlider = () => {
  const [sliderId, setSliderId] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderId(getNextId(sliderId));
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [sliderId]);

  return (
    <div className={styles.slider}>
      {SliderData.map((slider) => {
        return (
          <div
            className={classNames(styles.img_wrapper, {
              [styles.active]: slider.id === sliderId,
            })}
            key={slider.id}
          >
            <img src={slider.imgUrl} alt="slider image" />
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioSlider;
