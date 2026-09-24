'use client'

import { Callout } from '@components/callout'
import { MdxCard } from '@components/mdx-card'
import { cn } from '@utils/index'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import type { ComponentProps } from 'react'

import CodeBlock from './CodeBlock'
import styles from './Mdx.module.css'

type El<T extends keyof React.JSX.IntrinsicElements> = ComponentProps<T>

/* Post body elements, styled per the v8 design. */
const components = {
  h1: ({ className, ...props }: El<'h1'>) => <h1 className={cn(styles.h2, className)} {...props} />,
  h2: ({ className, ...props }: El<'h2'>) => <h2 className={cn(styles.h2, className)} {...props} />,
  h3: ({ className, ...props }: El<'h3'>) => <h3 className={cn(styles.h3, className)} {...props} />,
  h4: ({ className, ...props }: El<'h4'>) => <h4 className={cn(styles.h4, className)} {...props} />,
  h5: ({ className, ...props }: El<'h5'>) => <h5 className={cn(styles.h4, className)} {...props} />,
  h6: ({ className, ...props }: El<'h6'>) => <h6 className={cn(styles.h4, className)} {...props} />,
  a: ({ className, ...props }: El<'a'>) => <a className={cn(styles.link, className)} {...props} />,
  p: ({ className, ...props }: El<'p'>) => <p className={cn(styles.p, className)} {...props} />,
  ul: ({ className, ...props }: El<'ul'>) => <ul className={cn(styles.ul, className)} {...props} />,
  ol: ({ className, ...props }: El<'ol'>) => <ol className={cn(styles.ol, className)} {...props} />,
  li: ({ className, ...props }: El<'li'>) => <li className={cn(styles.li, className)} {...props} />,
  blockquote: ({ className, ...props }: El<'blockquote'>) => (
    <blockquote className={cn(styles.quote, className)} {...props} />
  ),
  img: ({ className, alt, ...props }: El<'img'>) => (
    <figure className={styles.figure}>
      <span className={styles.frame}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={className} alt={alt ?? ''} loading="lazy" decoding="async" {...props} />
      </span>
      {alt && <figcaption className={styles.caption}>{alt}</figcaption>}
    </figure>
  ),
  hr: (props: El<'hr'>) => <hr className={styles.hr} {...props} />,
  table: ({ className, ...props }: El<'table'>) => (
    <div className={styles.tableWrap}>
      <table className={cn(styles.table, className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: El<'th'>) => <th className={cn(styles.th, className)} {...props} />,
  td: ({ className, ...props }: El<'td'>) => <td className={cn(styles.td, className)} {...props} />,
  pre: (props: El<'pre'>) => <CodeBlock {...props} />,
  code: ({ className, ...props }: El<'code'>) => <code className={cn(styles.inlineCode, className)} {...props} />,
  em: ({ className, ...props }: El<'em'>) => <em className={cn(styles.em, className)} {...props} />,
  Image,
  Callout,
  Card: MdxCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className={cn('mdx', styles.body)}>
      <Component components={components as MDXComponents} />
    </div>
  )
}
