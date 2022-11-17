import React, { useEffect, Suspense } from 'react'
import styles from './Dashboard.module.scss'
import { animateSection } from 'hooks/animations/useAnimationExample/animateSection'
import { Link } from 'react-router-dom'

const Dashboard = ({}) => {
  return (
    <Suspense fallback={<div>Dashboard is loading</div>}>
      <Link to="/">
        <button>
          Hello
        </button>
      </Link>
    </Suspense>
  )
}

export default Dashboard
