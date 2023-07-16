import dynamic from 'next/dynamic'

import styles from './NameInfo.module.css'

const ScrambleHeading = dynamic(() => import('@components/ScrambleHeading'), { ssr: false })

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
