<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { Layout } from '../Layout';
import styles from './App.module.scss';
=======
import { Layout } from 'components/Layout';
import { RoutesComponent } from 'components/RoutesComponent';
>>>>>>> 5d4fd322ff7ee5e14de2171e7054f30161d34ad3

function App() {
  return (
    <Layout>
      <RoutesComponent />
    </Layout>
  );
}

export default App;
