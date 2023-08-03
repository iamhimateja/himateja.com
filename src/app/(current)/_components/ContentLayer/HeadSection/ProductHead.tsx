import { Icons } from '@components/Icons'
import { formatDate } from '@utils/index'
import type { Product } from 'contentlayer/generated'
import Link from 'next/link'

import styles from '../contentLayer.module.css'

type Props = {
  product: Product
}

const ProductHead = ({ product }: Props) => {
  let tags: string = ''

  if (product.tags) {
    const productTags = product.tags.join(', ')
    tags = productTags?.length > 15 ? `${productTags?.slice(0, 15)}...` : productTags
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      {/* <h1 className={styles.tagLine}>{product.tagLine}</h1> */}

      <div className={styles.metaInfo}>
        <div className={styles.metaInfoItem}>
          <Icons.Calendar className="w-3.5 h-3.5" />
          {formatDate(product.date)}
        </div>
        {product.inProgress && (
          <div className={styles.metaInfoItem}>
            <Icons.ProjectStatus className="w-3.5 h-3.5" />
            Work in progress
          </div>
        )}
        {(product.tags?.length || 0) > 0 && (
          <div className={styles.metaInfoItem}>
            <Icons.Tags className="w-3.5 h-3.5" />
            {tags}
          </div>
        )}
        {product.gitSourceUrl && (
          <Link href={product.gitSourceUrl} className={styles.metaInfoItem}>
            <Icons.GitHub className="w-3.5 h-3.5" />
            {product.gitSourceUrl}
          </Link>
        )}
        {product.demoUrl && (
          <Link href={product.demoUrl} className={styles.metaInfoItem}>
            <Icons.Link className="w-3.5 h-3.5" />
            {product.demoUrl}
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProductHead
