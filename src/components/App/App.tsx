import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';
import WhyNK from 'components/WhyNK/WhyNK';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          NK
          <WhyNK />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
