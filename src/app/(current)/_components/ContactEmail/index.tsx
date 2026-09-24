'use client'

import { myMailId } from '@globals/constants'
import Link from 'next/link'
import { useSyncExternalStore } from 'react'

/* The real address only appears after hydration, so it is not in the server HTML. Keeps out
   simple scrapers, not ones that run JavaScript. */
const SPELLED = 'contact [at] himateja [dot] com'
const noop = () => () => {}

/* '' on the server and during hydration, the real address after */
const useEmail = () =>
  useSyncExternalStore(
    noop,
    () => myMailId,
    () => '',
  )

type Props = {
  className?: string
  'aria-label'?: string
  target?: string
  tabIndex?: number
}

const ContactEmail = ({ className, target, tabIndex, 'aria-label': ariaLabel }: Props) => {
  const email = useEmail()
  return (
    <Link
      href={email ? `mailto:${email}` : '#'}
      className={className}
      target={target}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {email || SPELLED}
    </Link>
  )
}

export default ContactEmail
