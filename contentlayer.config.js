import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer2/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    ...computedFields,
    readingTime: {
      type: 'number',
      resolve: (doc) => Math.max(1, Math.round(doc.body.raw.trim().split(/\s+/).length / 200)),
    },
  },
}))

export const Product = defineDocumentType(() => ({
  name: 'Product',
  filePathPattern: `products/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    tagLine: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    icon: {
      type: 'string',
    },
    ogImage: {
      type: 'string',
    },
    screenshot: {
      type: 'string',
    },
    demoUrl: {
      type: 'string',
    },
    gitSourceUrl: {
      type: 'string',
    },
    inProgress: {
      type: 'boolean',
      default: false,
    },
    inResearch: {
      type: 'boolean',
      default: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Article, Product],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
