import React, { Suspense } from 'react'
import styles from './Home.module.scss'
import { ReactComponent as ReactLogo } from 'assets/icons/react.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = ({}) => {
  return (
    <Suspense fallback={<div>Home is loading</div>}>
      <motion.div
        className={styles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
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
      </motion.div>
    </Suspense>
  )
}

export default Home
