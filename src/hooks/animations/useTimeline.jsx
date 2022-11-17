import React, { useRef } from 'react'
import gsap from 'gsap'

export const useTimeline = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  return timeline.current
}
