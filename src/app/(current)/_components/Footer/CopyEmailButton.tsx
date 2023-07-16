'use client'

import CopyIcon from '@icons/CopyIcon'
import { useState } from 'react'
import { Tooltip } from 'react-tippy'

import styles from './Footer.module.css'

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <Tooltip
      animateFill
      size="small"
      inertia
      title={isCopied ? 'copied!' : 'copy email to clipboard'}
      position="top"
      trigger="mouseenter"
      className={styles.copyEmailButton}
    >
      <button
        className={styles.copyEmailButton}
        onClick={() => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText('hello@himateja.com').then(() => {
              setIsCopied(true)
              setTimeout(() => {
                setIsCopied(false)
              }, 2000)
            })
          }
        }}
      >
        <CopyIcon />
      </button>
    </Tooltip>
  )
}

export default CopyEmailButton
