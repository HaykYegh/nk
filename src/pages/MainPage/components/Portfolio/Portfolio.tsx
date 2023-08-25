import { PortfolioSlider } from './components/PortfolioSlider';

import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolio_wrapper}>
      <div className={styles.title}>
        <h2>Portfolio</h2>
      </div>
      <PortfolioSlider />
    </div>
  );
};

export default Portfolio;
