import type { Article } from 'contentlayer/generated'

import styles from '../contentLayer.module.css'

type Props = {
  article: Article
}

const ArticleHead = ({ article }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{article.title}</h1>
    </div>
  )
}

export default ArticleHead
