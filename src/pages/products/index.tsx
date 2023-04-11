import { Layout, Seo } from '@/components'

import styles from './styles.module.scss'

export default function About() {
  return (
    <Layout>
      <Seo pageTitle="Products" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Products</h1>
        </div>
      </div>
    </Layout>
  )
}
