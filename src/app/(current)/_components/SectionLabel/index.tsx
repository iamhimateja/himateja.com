import styles from './SectionLabel.module.css'

type Props = {
  children: string
  id?: string
}

const SectionLabel = ({ children, id }: Props) => (
  <h2 id={id} className={styles.label}>
    {children}
  </h2>
)

export default SectionLabel
