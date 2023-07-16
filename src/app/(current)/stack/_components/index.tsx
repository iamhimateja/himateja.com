'use client'

import PageHeading from '@components/PageHeading'
import { useState } from 'react'

import DisplaySwitcher from './DisplaySwitcher'
import StackGrid from './Grid'
import StackList from './List'
import styles from './StackPage.module.css'

const StackPage = () => {
  const [display, setDisplay] = useState<'list' | 'grid'>('list')
  return (
    <>
      <PageHeading title="my stack" />

      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>
          Things I <span className="text-blue-400 dark:text-white">use</span> and{' '}
          <span className="text-blue-400 dark:text-white">love</span>
        </h2>
        <DisplaySwitcher display={display} setDisplay={setDisplay} />
      </div>

      {display === 'list' ? <StackList /> : <StackGrid />}
    </>
  )
}

export default StackPage
