import React from 'react';
import '../../App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import { Container } from '../Container';
import { Layout } from '../Layout';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>NK</Layout>
        {/* <Routes>
          <Route path='/' element={} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
