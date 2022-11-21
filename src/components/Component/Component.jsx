import React from 'react'
import styles from './Component.module.scss'
import { animateSection } from 'hooks/animations/useAnimationExample/animateSection'

const Component = ({}) => {
  const { app2 } = animateSection()

  return (
    <div ref={app2}>
      <div className={styles.component}>
        <h1 className={styles.component__title + ' h1 js-component__title'}>Etheric React Boilerplate</h1>
      </div>
    </div>
  )
}

export default Component
