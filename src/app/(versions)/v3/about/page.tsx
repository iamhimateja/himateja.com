import { Contact, Layout } from '@v3/components'
import { skills } from '@v3/lib/variables'
import Link from 'next/link'

import styles from './styles.module.scss'

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>About</h1>
            <span>A bit about myself</span>
          </div>
          <p className={styles.paragraph}>
            I am a full-stack engineer who is passionate about exploring and experimenting with frontend technologies
          </p>
          <p className={styles.paragraph}>
            Through my journey from personal projects to working with established companies, I have honed my skills in
            web development across various applications such as UI/UX design, frontend development using Node.js, React
            and Ruby on Rails, and backend development.
          </p>
          <p className={styles.paragraph}>
            One of my strengths lies is his knack for understanding project requirements and transforming them into
            smooth, efficient solutions that accommodate both users and businesses alike.
          </p>
          <p className={styles.paragraph}>
            Besides being a coding nerd, I am an excellent communicator and team player. I enjoy collaborating with
            cross-functional teams, including designers, product managers, and stakeholders, to ensure that the final
            product aligns with everyone&#39;s goals and vision. I am always on the lookout for new opportunities to
            connect and work with creative minds to develop innovative and user-centric digital experiences.
          </p>
          <p className={styles.paragraph}>
            When I am not coding, I enjoy watching movies, playing video games, and spending time with my family.
          </p>
          <p className={styles.paragraph}>
            Here is a full{' '}
            <Link href="/files/Himateja - Resume.pdf" target="_blank" aria-label="Download hima's résumé" tabIndex={0}>
              résumé
            </Link>{' '}
            of my work experience and education.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.tags}>
            {skills.map((skill) => (
              <div key={skill} className={styles.tag}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.subHeading}>Get in Touch</h2>
          <p className={styles.paragraph}>
            Feel free to get in touch and let&#39;s have a discussion about how we can work together.
          </p>

          <Contact />
        </div>
      </div>
    </Layout>
  )
}
