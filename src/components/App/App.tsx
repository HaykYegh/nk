import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '../Layout';

import styles from './App.module.scss';
import AboutForm from 'components/AboutForm/AboutForm';

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
