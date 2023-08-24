import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';
import OurTeam from 'components/OurTeam/OurTeam';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          NK
          <OurTeam />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
