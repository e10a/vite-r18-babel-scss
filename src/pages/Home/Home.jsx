import React, { Suspense } from 'react'
import styles from './Home.module.scss'
import { ReactComponent as ReactLogo } from 'assets/icons/react.svg'
import { Link } from 'react-router-dom'

const Home = ({}) => {
  return (
    <Suspense fallback={<div>Home is loading</div>}>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <div className={styles.logo__react}>
              <ReactLogo width="20px" height="20px" fill="red" />
            </div>
          </a>
        </div>
        <Link to="/dashboard">
          <h1 className={styles.navigate}>Etheric React Boilerplate</h1>
        </Link>
        <p className={styles.read__the__docs}>Click on the Vite and React logos to learn more</p>
      </div>
    </Suspense>
  )
}

export default Home
