import Link from 'next/link'
import type { ReactNode } from 'react'

import styles from './SectionHeading.module.css'

type Props = {
  title: string
  pageLink?: string
  pageLinkContent?: ReactNode
  label?: string
}

const SectionHeading = ({ title, pageLink, pageLinkContent, label }: Props) => {
  if (!pageLink) {
    return <h2 className={styles.heading}>{title}</h2>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <Link href={pageLink} className={styles.link} aria-label={(label ?? 'Go to page') as string} tabIndex={0}>
        {pageLinkContent}
      </Link>
    </div>
  )
}

export default SectionHeading
