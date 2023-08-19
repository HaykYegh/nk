import {OurOffice} from "./components/OurOffice";

import styles from './App.module.scss';

const App = () => {
  return (
      <div>
          <div className={styles.container}>
              <OurOffice />
          </div>
      </div>
  )
};

export default App;
