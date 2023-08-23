import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import { Layout } from '../Layout';
import AboutForm from 'components/AboutForm/AboutForm';
import GetProjectForm from 'components/GetProjectForm/GetProjectForm';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          NK
          <AboutForm />
          <GetProjectForm contactPage={true} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
