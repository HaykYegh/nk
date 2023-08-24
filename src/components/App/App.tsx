import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';
import { CareerDetails } from 'pages/CareerDetails';

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
