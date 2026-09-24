'use client'

import ContactEmail from '@components/ContactEmail'
import { Icons } from '@icons'
/* loaded up front so the swap is instant on the first click */
import { useState } from 'react'
import { Tooltip } from 'react-tippy'

import { myMailId } from '@/globals/constants'

import styles from './Footer.module.css'

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className={styles.emailAddressButton}>
      <ContactEmail tabIndex={0} className={styles.emailId} target="_blank" />
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
          aria-label={isCopied ? 'copied' : 'copy email to clipboard'}
          tabIndex={-1}
          className={styles.copyEmailButton}
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(myMailId).then(() => {
                setIsCopied(true)
                setTimeout(() => {
                  setIsCopied(false)
                }, 2500)
              })
            }
          }}
        >
          {isCopied ? <Icons.Check /> : <Icons.Copy />}
        </button>
      </Tooltip>
    </div>
  )
}

export default CopyEmailButton
