import { PortfolioSlider } from './components/PortfolioSlider';

import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolio_wrapper}>
      <div className={styles.title}>
        <h2>Portfolio</h2>
      </div>
      <PortfolioSlider />
      <button>Project Details</button>
    </div>
  );
};

export default Portfolio;
