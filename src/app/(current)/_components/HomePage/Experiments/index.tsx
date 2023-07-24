import { completedProjects } from '@globals/constants'
import ArrowTopRight from '@icons/ArrowTopRight'
import Link from 'next/link'

import styles from './Experiments.module.css'

const Experiments = () => {
  const projects = completedProjects.slice(0, 3)

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Link
          href={project.github ?? project.url}
          key={project.slug}
          className={styles.item}
          tabIndex={0}
          aria-label={`click to open ${project.title} project`}
          target="_blank"
        >
          <div className={styles.title}>{project.shortTitle ?? project.title}</div>
          <div className={styles.line}>
            <div className={styles.lineInner} />
          </div>
          <div className={styles.category}>{project.tags[0]}</div>
          <div className={styles.view}>
            View
            <ArrowTopRight />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Experiments
