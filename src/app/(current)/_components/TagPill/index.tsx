import { cn } from '@utils/index'
import type { ReactNode } from 'react'

import styles from './TagPill.module.css'

type Props = {
  children: ReactNode
  active?: boolean
  size?: 'sm' | 'md'
  className?: string
}

const TagPill = ({ children, active = false, size = 'md', className }: Props) => (
  <span className={cn(styles.pill, size === 'sm' && styles.small, active && styles.active, className)}>{children}</span>
)

export default TagPill
