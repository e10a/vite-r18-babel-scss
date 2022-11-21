import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { ReactComponent as ReactLogo } from 'assets/icons/react.svg'

const Navigation = ({}) => {
  return (
    <nav className={styles.navigation}>
        <div className={styles.navigation__logo}>
            <ReactLogo width="40px" height="40px" fill="black" />
        </div>
        <div className={styles.navigation__menu}>
            <Link to="/">
                <p className={styles.navigation__item}>Home</p>
            </Link>
            <Link to="/dashboard">
                <p className={styles.navigation__item}>Dashboard</p>
            </Link>
        </div>

    </nav>
  )
}

export default Navigation
