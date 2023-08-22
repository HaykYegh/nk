import { MainPage } from './components/MainPage';

import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <MainPage />
      </div>
    </div>
  );
};

export default App;
