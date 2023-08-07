import { Callout } from '@components/callout'
import { MdxCard } from '@components/mdx-card'
import { cn } from '@utils/index'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import * as React from 'react'

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-2xl font-bold tracking-tight dark:!text-neutral-300', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        'relative mt-10 scroll-m-20 pb-1 text-xl font-semibold tracking-tight first:mt-0 dark:!text-neutral-300',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight dark:!text-neutral-300', className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight dark:!text-neutral-300', className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn('mt-8 scroll-m-20 text-sm font-semibold tracking-tight dark:!text-neutral-300', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn('mt-8 scroll-m-20 text-xs font-semibold tracking-tight dark:!text-neutral-300', className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a className={cn('font-medium underline underline-offset-4 dark:!text-neutral-300', className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        'leading-7 [&:not(:first-child)]:mt-6 text-[color:var(--default-text)] dark:!text-neutral-300',
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn('my-6 ml-6 text-base list-disc dark:!text-neutral-300', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('my-6 ml-6 text-base list-decimal dark:!text-neutral-300', className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn('mt-2 dark:!text-neutral-300', className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right dark:!text-neutral-300',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right dark:!text-neutral-300',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn('mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 dark:!text-neutral-300', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm dark:!text-neutral-300',
        className,
      )}
      {...props}
    />
  ),
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
    <div className="mdx">
      <Component components={components as MDXComponents} />
    </div>
  )
}
