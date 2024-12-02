import React, { Suspense } from 'react'
// import styles from './Home.module.scss'
import { motion } from 'framer-motion'

// components
// import Navigation from 'components/Navigation/index.js'
import Component from 'components/Component'

const Home = () => {
  return (
    <Suspense fallback={<div>Home is loading</div>}>
      <motion.div
        className="site-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* content begins */}

        {/* navi */}
        {/* <Navigation /> */}

        {/* component example */}
        <Component />
      </motion.div>
    </Suspense>
  )
}

export default Home
