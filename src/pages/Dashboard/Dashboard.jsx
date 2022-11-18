import React, { Suspense } from 'react'
import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Dashboard = () => {
  return (
    <Suspense fallback={<div>Dashboard is loading</div>}>
      <motion.div
        className={styles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Link to="/">
          <button>Hello</button>
        </Link>
      </motion.div>
    </Suspense>
  )
}

export default Dashboard
