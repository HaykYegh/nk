import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '../Layout';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>NK</Layout>
      </Router>
    </div>
  );
}

export default App;
