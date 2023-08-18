import React, { FC, ReactNode } from "react";

import styles from "./Layout.module.scss";
import { Container } from "../Container";
import { Header } from "../Header";

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
      <Header />

      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
