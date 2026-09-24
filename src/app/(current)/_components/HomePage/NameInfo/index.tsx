'use client'

import dynamic from 'next/dynamic'

import styles from './NameInfo.module.css'

/* The heading is client-only; the placeholder holds its line so the page does not jump. */
const ScrambleHeading = dynamic(() => import('@components/ScrambleHeading'), {
  ssr: false,
  loading: () => (
    <div className={styles.headingSpace} aria-hidden="true">
      &nbsp;
    </div>
  ),
})

const NameInfo = () => {
  return (
    <div className={styles.container}>
      <ScrambleHeading className={styles.heading} text="himateja" />
      <div className={styles.subHeading}>
        <span>engineer</span>
        <span>designer</span>
        <span>solopreneur</span>
      </div>
    </div>
  )
}

export default NameInfo
