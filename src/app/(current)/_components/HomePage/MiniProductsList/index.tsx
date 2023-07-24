import Image from 'next/image'
import Link from 'next/link'

import { onGoingProjects } from '@/globals/constants'

import styles from './MiniProductsList.module.css'

const MiniProductsList = () => {
  return (
    <>
      {onGoingProjects.map((project) => (
        <Link
          href={`/products/${project.slug}`}
          className={styles.item}
          key={project.slug}
          aria-label={`Click to view ${project.title}`}
        >
          {project.imagePath && (
            <div className={styles.image}>
              <Image src={project.imagePath} alt={project.title} width={40} height={40} />
            </div>
          )}
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.price}>{project.subtitle}</div>
            </div>
            <div className={styles.status}>{project.status}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default MiniProductsList
