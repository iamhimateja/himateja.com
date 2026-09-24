import PageHeading from '@components/PageHeading'
import Link from 'next/link'

import styles from './NotFound.module.css'

/* 404 body, used by not-found.tsx and app/global-not-found.tsx. */
const NotFound = () => (
  <>
    <PageHeading title="not found" />
    <section className={styles.body}>
      <p className={styles.code}>404</p>
      <p className={styles.lead}>Nothing lives at this address.</p>
      <p>It may have moved with one of the redesigns, or never existed. The wheel in the nav has the old versions.</p>
      <p>
        <Link href="/" className="link">
          Back to the home page
        </Link>
      </p>
    </section>
  </>
)

export default NotFound
