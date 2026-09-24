import { allArticles, allProducts } from 'contentlayer/generated'

import ItemCard from './ItemCard'
import styles from './WorkItems.module.css'

const Articles = ({ type }: { type: 'products' | 'articles' }) => {
  const content = type === 'products' ? allProducts : allArticles

  if (content.length === 0) {
    return <></>
  }

  return (
    <div className={styles.container}>
      {content.map((article) => (
        <ItemCard key={article.slug} type={type} item={article} />
      ))}
    </div>
  )
}

export default Articles
