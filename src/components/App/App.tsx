import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '../Layout';
import AboutForm from 'components/AboutForm/AboutForm';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          NK
          <AboutForm
            formTitle="asdasd"
            checkBoxShow={false}
            btnTitle="request aquote"
          />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
