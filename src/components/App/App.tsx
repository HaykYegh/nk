import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';

import { RoutesComponent } from 'components/RoutesComponent';

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
