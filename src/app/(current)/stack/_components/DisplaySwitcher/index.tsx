'use client'

import GridIcon from '@icons/GridIcon'
import ListIcon from '@icons/ListIcon'
import { cn } from '@utils/index'
import type { Dispatch, SetStateAction } from 'react'
import { Tooltip } from 'react-tippy'

import styles from './DisplaySwitcher.module.css'

const DisplaySwitcher = ({
  display,
  setDisplay,
}: {
  display: 'list' | 'grid'
  setDisplay: Dispatch<SetStateAction<'list' | 'grid'>>
}) => {
  return (
    <span className={styles.container}>
      <Tooltip animateFill size="small" inertia title="view as list" position="top" trigger="mouseenter">
        <button
          aria-label="view as list"
          tabIndex={0}
          type="button"
          className={cn(styles.button, 'rounded-l-md', display === 'list' && styles.active)}
          onClick={() => setDisplay('list')}
        >
          <ListIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </Tooltip>
      <Tooltip animateFill size="small" inertia title="view as grid" position="top" trigger="mouseenter">
        <button
          aria-label="view as grid"
          tabIndex={0}
          type="button"
          className={cn(styles.button, 'rounded-r-md', display === 'grid' && styles.active)}
          onClick={() => setDisplay('grid')}
        >
          <GridIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </Tooltip>
    </span>
  )
}

export default DisplaySwitcher
