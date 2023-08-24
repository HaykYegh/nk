import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';

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
