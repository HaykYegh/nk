import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.ErrorPage}>
      <div className={styles.container}>
        <i className="fa-solid fa-circle-exclamation"></i>
        <h1>404 Error</h1>
        <p>Sorry, page not found</p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
