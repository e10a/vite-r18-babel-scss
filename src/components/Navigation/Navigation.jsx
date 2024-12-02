import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { ReactComponent as ReactLogo } from 'assets/icons/react.svg'
import PropTypes from 'prop-types'

Navigation.propTypes = {
  routes: PropTypes.array
}
export default function Navigation({ routes }) {
  console.log('Navigation:', routes)
  return (
    <div>
      <div className={styles.navigation__logo}>
        <ReactLogo width="40px" height="40px" fill="black" />
      </div>

      <nav>
        <ul>
          {routes.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  textDecoration: isActive ? 'underline' : 'none'
                })}
              >
                {path === '/' ? 'home' : path}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
