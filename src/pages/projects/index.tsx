import { Layout, Seo } from '@/components'

import styles from './styles.module.scss'

export default function About() {
  return (
    <Layout>
      <Seo pageTitle="Projects" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Projects</h1>
        </div>
      </div>
    </Layout>
  )
}
