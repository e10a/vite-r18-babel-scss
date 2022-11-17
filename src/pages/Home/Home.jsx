import React from 'react';
import styles from './Home.module.scss';
import reactLogo from 'assets/icons/react.svg';

const Home = ({}) => {
  return (
    <div>
      <Home/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className={styles.logo + ' react'} alt="React logo" />
        </a>
      </div>
      <h1>Etheric React Boilerplate</h1>
      <p className={styles.read__the__docs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default Home;
