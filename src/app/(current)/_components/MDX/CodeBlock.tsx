'use client'

import { type ComponentProps, useRef, useState } from 'react'

import styles from './Mdx.module.css'

type Props = ComponentProps<'pre'> & { 'data-language'?: string }

/* Code block with a header: language on the left, copy on the right. The <pre> itself comes
   from rehype-pretty-code with the tokens already coloured. */
const CodeBlock = ({ children, ...props }: Props) => {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)
  const language = props['data-language'] ?? 'code'

  const copy = async () => {
    const text = ref.current?.textContent ?? ''
    if (!text || !navigator.clipboard) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <figure className={styles.code}>
      <span className={styles.codeHead}>
        <span>{language}</span>
        <button type="button" onClick={copy} aria-label="Copy code">
          {copied ? 'copied' : 'copy'}
        </button>
      </span>
      <pre ref={ref} {...props}>
        {children}
      </pre>
    </figure>
  )
}

export default CodeBlock
