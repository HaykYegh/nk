import { BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { Layout } from '../Layout';
import styles from './App.module.scss';
import ProjectDiteals from 'components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <MainPage />
          <ProjectDiteals
            formTitle="warface"
            btnTitle="Arss"
            checkBoxShow={true}
          />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
