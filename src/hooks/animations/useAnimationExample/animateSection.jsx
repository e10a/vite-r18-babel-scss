import { useLayoutEffect, useRef } from 'react'
import { useTimeline } from 'hooks/animations/useTimeline'
import { gsap } from 'gsap'

export const animateSection = (playImmediately) => {
  const tl = useTimeline()

  const app2 = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      tl.to('.js-component__title', {
        alpha: 0.5,
        repeat: -1,
        repeatDelay: 0.2,
        duration: 0.2,
        yoyo: true
      })

      tl.play()
    }, app2) // <- Scope!

    return () => ctx.revert()
  }, [])

  return { app2 }
}
