import React from "react";
import { NavLink as Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { Logo } from "../Logo";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <nav>
        <div className={styles.section}>
          <a href="">WHY NK?</a>
        </div>
        <div className={styles.section}>
          <a href="">SERVICES</a>
        </div>
        <div className={styles.section}>
          <a href="">CONTACT US</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
