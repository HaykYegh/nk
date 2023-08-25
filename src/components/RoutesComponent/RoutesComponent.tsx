import About from 'components/About/About';
import WhyNK from 'components/WhyNK/WhyNK';
import { Approach } from 'pages/Approach';
import { MainPage } from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import styles from './RoutesComponent.module.scss';
import ContactUs from 'pages/ContactUs/ContactUs';

const RoutesComponent = () => {
  return (
    <div className={styles.RoutesComponent}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/why-nk" element={<WhyNK />} />
        {/* <Route path="/web-applications" />
        <Route path="/chrome-extensions" />
        <Route path="/desktop-applications" /> */}
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
