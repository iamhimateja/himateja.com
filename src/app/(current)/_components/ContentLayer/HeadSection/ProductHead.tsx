import { Icons } from '@components/Icons'
import { formatDate } from '@utils/index'
import type { Product } from 'contentlayer/generated'

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
          <Icons.Calendar className="w-4 h-4" />
          {formatDate(product.date)}
        </div>
        {product.inProgress && (
          <div className={styles.metaInfoItem}>
            <Icons.ProjectStatus className="w-4 h-4" />
            Work in progress
          </div>
        )}
        {(product.tags?.length || 0) > 0 && (
          <div className={styles.metaInfoItem}>
            <Icons.Tags className="w-4 h-4" />
            {tags}
          </div>
        )}
        {product.gitSourceUrl && (
          <div className={styles.metaInfoItem}>
            <Icons.GitHub className="w-4 h-4" />
            {product.gitSourceUrl}
          </div>
        )}
        {product.demoUrl && (
          <div className={styles.metaInfoItem}>
            <Icons.Link className="w-4 h-4" />
            {product.demoUrl}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductHead
