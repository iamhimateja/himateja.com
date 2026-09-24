import { cn } from '@utils/index'

import styles from './YearBadge.module.css'

type Props = {
  children: string
  size?: 'md' | 'lg'
}

const YearBadge = ({ children, size = 'md' }: Props) => (
  <span className={cn(styles.badge, size === 'lg' && styles.lg)}>{children}</span>
)

export default YearBadge
