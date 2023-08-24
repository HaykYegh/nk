import { RoutesComponent } from 'components/RoutesComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../Layout';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <RoutesComponent />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
