import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '../Layout';
import { Careers } from 'pages/Careers';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <Careers />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
