'use client'

import { useEffect, useRef } from 'react'

import styles from '../Post.module.css'

/* Thin bar at the top of the viewport showing how far down the post the reader is. */
const ReadingProgress = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      const p = max > 0 ? Math.min(100, (scrollY / max) * 100) : 0
      if (ref.current) ref.current.style.width = `${p}%`
    }
    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    return () => {
      removeEventListener('scroll', update)
      removeEventListener('resize', update)
    }
  }, [])

  return <div ref={ref} className={styles.progress} aria-hidden="true" />
}

export default ReadingProgress
