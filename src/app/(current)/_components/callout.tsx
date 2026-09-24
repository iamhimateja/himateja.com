import { cn } from '@utils/index'

interface CalloutProps {
  label?: string
  children?: React.ReactNode
  type?: 'default' | 'warning' | 'danger'
}

/* Side note inside a post: soft surface, small mono label on the left. */
export function Callout({ children, label, type = 'default', ...props }: CalloutProps) {
  return (
    <aside
      className={cn(
        'grid max-w-[60ch] grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-xl bg-[color:var(--color-soft)] px-4 py-3.5 text-[15px] leading-[1.6] text-[color:var(--default-text)]',
        type === 'warning' && 'shadow-[inset_2px_0_0_0_#f59e0b]',
        type === 'danger' && 'shadow-[inset_2px_0_0_0_#ef4444]',
      )}
      {...props}
    >
      <span className="pt-[3px] font-mono text-[11px] uppercase tracking-[0.08em] opacity-80 dark:opacity-100">
        {label ?? (type === 'default' ? 'note' : type)}
      </span>
      <span>{children}</span>
    </aside>
  )
}
