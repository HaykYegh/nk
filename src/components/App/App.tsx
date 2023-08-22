import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';
import AboutForm from 'components/AboutForm/AboutForm';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          NK
          <AboutForm />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
