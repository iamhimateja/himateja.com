'use client'

import PageHeading from '@components/PageHeading'
import { useState } from 'react'

import DisplaySwitcher from './DisplaySwitcher'
import StackGrid from './Grid'
import StackList from './List'

const StackPage = () => {
  const [display, setDisplay] = useState<'list' | 'grid'>('list')
  return (
    <>
      <PageHeading title="my stack" />

      <div className="heading-container">
        <h2 className="heading">
          things I <span className="text-[color:var(--default-theme-color)] dark:text-white">use</span> and{' '}
          <span className="text-[color:var(--default-theme-color)] dark:text-white">love</span>
        </h2>
        <DisplaySwitcher display={display} setDisplay={setDisplay} />
      </div>

      {display === 'list' ? <StackList /> : <StackGrid />}
    </>
  )
}

export default StackPage
