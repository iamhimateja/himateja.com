'use client'

import CopyIcon from '@icons/CopyIcon'
import Link from 'next/link'
import { useState } from 'react'
import { Tooltip } from 'react-tippy'

import { myMailId } from '@/globals/constants'

import styles from './Footer.module.css'

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className={styles.emailAddressButton}>
      <Link
        tabIndex={0}
        aria-label="Send me an email"
        className={styles.emailId}
        href={`mailto:${myMailId}`}
        target="_blank"
      >
        {isCopied ? 'copied!' : myMailId}
      </Link>
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
          aria-label="copy email to clipboard"
          tabIndex={0}
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
    </div>
  )
}

export default CopyEmailButton
