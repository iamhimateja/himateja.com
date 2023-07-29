import { getArticle, getProduct } from '@utils/contentlayer'
import type { Article, Product } from 'contentlayer/generated'

import ArticleHead from './ArticleHead'
import ProductHead from './ProductHead'

type Props = {
  slug: string
  type: 'articles' | 'products'
}

const HeadSection = ({ slug, type }: Props) => {
  const content = type === 'products' ? getProduct(slug) : getArticle(slug)

  if (!content) {
    return null
  }

  return type === 'products' ? (
    <ProductHead product={content as Product} />
  ) : (
    <ArticleHead article={content as Article} />
  )
}

export default HeadSection
