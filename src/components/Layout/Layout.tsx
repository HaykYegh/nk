import React, { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';
import { Container } from '../Container';
import { Header } from '../Header';
import { HeaderImg } from '../HeaderImg';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      {/* //header
       //image
        //right menue 
        
        container {children} container 
        
        //footer */}
      <div className={styles.mainLayout}>
        <Header />
        <HeaderImg />
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
