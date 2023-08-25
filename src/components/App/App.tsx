import { BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { Layout } from '../Layout';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <MainPage />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
