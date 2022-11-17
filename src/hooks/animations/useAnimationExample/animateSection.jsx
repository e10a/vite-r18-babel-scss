import React, { useEffect, useRef } from 'react'
import { useTimeline } from 'hooks/animations/useTimeline'

export const animateSection = (playImmediately) => {
  const tl = useTimeline()
  const newsSection = useRef(null)
  const newsTitle = useRef(null)

  useEffect(() => {
    tl.to(newsSection.current, {
      x: 10,
      duration: 0.1
    })
    tl.to(newsTitle.current, {
      letterSpacing: 1,
      duration: 0.1
    })
    if (playImmediately) {
      tl.play()
    }
  }, [])

  return { newsSection, newsTitle, tl }
}
