import { Layout, ProjectItem, Seo } from '@/components'
import { completedProjects } from '@/lib/variables'

import styles from './styles.module.scss'

export default function Projects() {
  return (
    <Layout>
      <Seo pageTitle="Projects" />
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
