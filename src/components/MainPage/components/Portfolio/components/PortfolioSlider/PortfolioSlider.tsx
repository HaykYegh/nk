import { useEffect, useState } from 'react';
import { getNextImg } from 'helpers/getNextImg';

import { SliderData } from '../../../../../../constants';

const PortfolioSlider = () => {
  const [imageUrl, setImageUrl] = useState(SliderData[0].imgUrl);

  useEffect(() => {
    const nextSlider = getNextImg();

    const intervalId = setInterval(() => {
      setImageUrl(nextSlider().imgUrl);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="slider image" />;
    </div>
  );
};

export default PortfolioSlider;
