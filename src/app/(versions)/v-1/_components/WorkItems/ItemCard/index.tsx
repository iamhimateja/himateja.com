import type { Article, Product } from 'contentlayer/generated'
import Link from 'next/link'

import styles from './ItemCard.module.css'

type Props =
  | {
      type: 'articles'
      item: Article
    }
  | {
      type: 'products'
      item: Product
    }

const ItemCard = ({ type, item }: Props) => {
  return (
    <Link href={item.slug} className={styles.container}>
      <div
        className={styles.image}
        {...(type === 'products' ? { style: { backgroundImage: `url(${item.icon})` } } : {})}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        {item.description && (
          <p className={styles.description}>
            {item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}
          </p>
        )}
      </div>
    </Link>
  )
}

export default ItemCard
