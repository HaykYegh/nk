import { OurOffice } from './components/OurOffice';
import { MainPage } from './components/MainPage';

import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <OurOffice />
        <MainPage />
      </div>
    </div>
  );
};

export default App;
