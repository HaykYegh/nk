import React, { FC, ReactNode, useState } from 'react';

import styles from './Layout.module.scss';
import { Container } from '../Container';
import { Header } from '../Header';
import { HeaderImg } from '../HeaderImg';
import { Sidebar } from 'components/Sidebar';
import { Footer } from 'components/Footer';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSidebarActive((prev) => !prev);
  };

  const closeSidebar = () => setSidebarActive(false);
  return (
    <div className={styles.Layout}>
      {/* //header
       //image
        //right menue 
        
        container {children} container 
        
        //footer */}
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
