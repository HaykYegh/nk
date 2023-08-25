import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ServicesPathNames } from '../../constants';

import { ServicesNavigation } from './components/ServicesNavigation';
import { ServicesDescription } from './components/ServicesDescription';
import ServicesChromeExtensions from './components/ServicesCrhomeExtensions';

import styles from './Services.module.scss';
import ServicesDesktopApplication from './components/ServicesDesktopApplication';

const Services = () => {
  const [servicesPathName, setServicesPathName] = useState(
    ServicesPathNames.web,
  );
  const { pathname } = useLocation();

  useEffect(() => {
    setServicesPathName(pathname);
  }, [pathname]);

  return (
    <div className={styles.services_wrapper}>
      <ServicesNavigation servicesPathName={servicesPathName} />

      {servicesPathName === ServicesPathNames.chrome ? (
        <ServicesChromeExtensions />
      ) : servicesPathName === ServicesPathNames.desktop ? (
        <ServicesDesktopApplication />
      ) : (
        <ServicesDescription />
      )}
    </div>
  );
};

export default Services;
