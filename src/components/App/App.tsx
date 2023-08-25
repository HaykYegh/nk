import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../Layout';
import { CareerDetails } from 'pages/CareerDetails';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <CareerDetails />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
