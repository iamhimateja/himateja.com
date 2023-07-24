import { completedProjects, defaultMeta } from '@globals/constants'
import { Layout, ProjectItem } from '@v3/components'

import styles from './styles.module.scss'

export const metadata = {
  title: `Projects | ${defaultMeta.title}`,
}

export default function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Projects</h1>
          <span>Some of the things I made.</span>
        </div>
        <div className={styles.projects}>
          {completedProjects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
