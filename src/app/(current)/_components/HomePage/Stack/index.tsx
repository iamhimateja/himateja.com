'use client'

import { myStack } from '@globals/constants'
import Link from 'next/link'
import { Tooltip } from 'react-tippy'

import styles from './Stack.module.css'

const Stack = () => {
  const stack = myStack.slice(0, 7)

  return (
    <div className={styles.container}>
      {stack.map((item, index) => (
        <Tooltip
          key={index}
          interactive
          animateFill
          size="small"
          inertia
          title={`${item.name} ↗`}
          position="top"
          trigger="mouseenter"
          className={styles.stackItem}
        >
          <Link href={item.url} target="_blank" aria-label={item.name} tabIndex={0}>
            <div style={{ backgroundImage: `url('${item.image}')` }} className={styles.stackItem} />
          </Link>
        </Tooltip>
      ))}

      <Tooltip
        interactive
        animateFill
        size="small"
        inertia
        title={`+ ${myStack.length - 7} more, click to see all`}
        position="top"
        trigger="mouseenter"
        className={styles.stackItem}
      >
        <Link href="/stack" className={styles.moreItem} aria-label="See all stack items" tabIndex={0}>
          <div className={styles.stackItem}>
            <span className={styles.more}>+{myStack.length - 7}</span>
          </div>
        </Link>
      </Tooltip>
    </div>
  )
}

export default Stack
