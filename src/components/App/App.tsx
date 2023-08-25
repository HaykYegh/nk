import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '../Layout';

import AboutForm from 'components/AboutForm/AboutForm';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <AboutForm
            btnTitle="asdas"
            formTitle="asdjhasd"
            checkBoxShow={true}
          />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
