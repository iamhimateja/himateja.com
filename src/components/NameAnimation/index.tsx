import React from 'react'

import styles from './styles.module.scss'

import TagLine from './TagLine'

import GlitchFilter from '~/svg/glitchFilter.svg'

const NameAnimation = () => {
  return (
    <section className={`flex h-screen w-full flex-row items-center justify-center bg-dark`}>
      <GlitchFilter style={{ display: 'none' }} />
      <div className={styles.wrapper}>
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
            <div className={styles['m-left']} />
            <div className={styles['m-skew-left']} />
            <div className={styles['m-skew-right']} />
            <div className={styles['m-right']} />
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
        <div className={styles.divider}>
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>

        <TagLine content="Designer & Developer" />
      </div>
    </section>
  )
}

export default NameAnimation
