import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

const NameAnimation = () => (
  <section className={styles['flex-wrapper']}>
    <div className={styles.wrapper}>
      <h3 className={styles.hiMessage}>
        <span>Hi, I&#39;m</span>
        <span className={styles.myNameMobile}>
          Hi, <br /> I&#39;m Himateja
        </span>
      </h3>
      <div className={styles.name}>
        <div className={styles['letter-h']}>
          <div className={styles['h-left']} />
          <div className={styles['h-right']} />
          <div className={styles['h-center']} />
        </div>
        <div className={styles['letter-i']}>
          <div className={styles['i-main']} />
        </div>
        <div className={styles['letter-m']}>
          <div />
          <div />
          <div />
        </div>
        <div className={styles['letter-a']}>
          <div className={styles['a-left']} />
          <div className={styles['a-right']} />
        </div>
        <div className={styles['letter-t']}>
          <div className={styles['t-top']} />
          <div className={styles['t-middle']} />
        </div>
        <div className={styles['letter-e']}>
          <div className={styles.e1} />
          <div className={styles.e2} />
          <div className={styles.e3} />
        </div>
        <div className={styles['letter-j']}>
          <div className={styles['j-right']} />
          <div className={styles['j-bottom']} />
        </div>
        <div className={styles['letter-a-right']}>
          <div className={styles['a-left']} />
          <div className={styles['a-right']} />
        </div>
      </div>
      <div className={styles.description}>
        Full-stack engineer currently positioned at{' '}
        <Link href="https://index.app/" target="_blank">
          Index
        </Link>
        . <br /> Formerly at{' '}
        <Link href="https://involvio.com/" target="_blank">
          Involvio
        </Link>{' '}
        and{' '}
        <Link href="https://halemind.com/" target="_blank">
          Halemind
        </Link>
        .
      </div>
    </div>
  </section>
)

export default NameAnimation
