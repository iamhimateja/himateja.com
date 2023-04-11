import Link from 'next/link'
import React from 'react'

import { myMailId, socialLinks } from '@/lib/variables'

import styles from './styles.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Link href={`mailto:${myMailId}`} target="_blank" className={styles.contactItem}>
        <span>Send me an email</span>
        <span>{myMailId}</span>
      </Link>
      <Link href={socialLinks.calendly} target="_blank" className={styles.contactItem}>
        <span>Book a call</span>
        <span>calendly.com/himateja</span>
      </Link>
    </div>
  )
}

export default Contact
