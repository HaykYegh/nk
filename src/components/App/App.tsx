import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';
import About from 'components/About/About';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          NK
          <About />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
