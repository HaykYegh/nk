import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Approach = lazy(() => import('pages/Approach'));
const ContactUs = lazy(() => import('pages/ContactUs/ContactUs'));
const MainPage = lazy(() => import('pages/MainPage'));
const Services = lazy(() => import('pages/Services'));
const WhyNK = lazy(() => import('components/WhyNK/WhyNK'));
const About = lazy(() => import('components/About/About'));

const RoutesComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/why-nk" element={<WhyNK />} />
        <Route path="/web-applications" element={<Services />} />
        <Route path="/chrome-extensions" element={<Services />} />
        <Route path="/desktop-applications" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
