import styles from './styles.module.scss'
interface TagLineProps {
  content: string
}

const TagLine = ({ content }: TagLineProps) => {
  const tagLine = content.split('')

  return (
    <div className={styles.tagLine}>
      {tagLine.map((tag, index) => (
        <span className={styles.individualLetter} key={index}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagLine
