import { myMailId, socialLinks } from '@v3/lib/variables'
import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Link href={`mailto:${myMailId}`} target="_blank" className={styles.contactItem} tabIndex={0}>
        <span>Send me an email</span>
        <span>{myMailId}</span>
      </Link>
      <Link href={socialLinks.calendly} target="_blank" className={styles.contactItem} tabIndex={0}>
        <span>Book a call</span>
        <span>calendly.com/himateja</span>
      </Link>
    </div>
  )
}

export default Contact
