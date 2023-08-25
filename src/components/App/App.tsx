import { BrowserRouter as Router } from 'react-router-dom';
import { Services } from 'pages/Services';
import { Layout } from '../Layout';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <Services />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
