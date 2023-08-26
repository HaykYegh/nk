import { FC, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../Container';
import Header from '../Header';
import HeaderImg from '../HeaderImg';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

import styles from './Layout.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const location = useLocation();

  const handleSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSidebarActive((prev) => !prev);
  };

  useEffect(() => {
    setSidebarActive(false);
  }, [location.pathname]);
  const closeSidebar = () => setSidebarActive(false);
  return (
    <div className={styles.Layout}>
      <div
        onClick={closeSidebar}
        className={`${styles.mainLayout} ${isSidebarActive && styles.moveLeft}`}
      >
        <Header
          isSidebarActive={isSidebarActive}
          handleSidebar={handleSidebar}
        />
        <HeaderImg />
        <Container>{children}</Container>
        <Footer />
      </div>
      <Sidebar isSidebarActive={isSidebarActive} />
    </div>
  );
};

export default Layout;
