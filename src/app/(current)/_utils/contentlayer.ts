import { allArticles, allProducts } from 'contentlayer/generated'

export const getProduct = (slug: string) => {
  const foundProduct = allProducts.find((product) => product.slugAsParams === slug)

  if (!foundProduct) {
    null
  }

  return foundProduct
}

export const getArticle = (slug: string) => {
  const foundArticle = allArticles.find((product) => product.slugAsParams === slug)

  if (!foundArticle) {
    null
  }

  return foundArticle
}
