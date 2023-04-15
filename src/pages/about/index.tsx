import Link from 'next/link'

import { Contact, Layout, Seo } from '@/components'
import { skills } from '@/lib/variables'

import styles from './styles.module.scss'

export default function About() {
  return (
    <Layout>
      <Seo pageTitle="About" />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>About</h1>
            <span>A bit about myself</span>
          </div>
          <p className={styles.paragraph}>
            Himateja Merlapaka is a full-stack engineer who loves playing with frontend technologies.
          </p>
          <p className={styles.paragraph}>
            Throughout his journey from personal projects to collaborating with established companies, Hima has
            sharpened his skills in web development across various applications, like UI/UX design, frontend stuff, and
            backend development using Node.js, React and Ruby on Rails.
          </p>
          <p className={styles.paragraph}>
            One of Hima&#39;s strengths lies is his knack for understanding project requirements and transforming them
            into smooth, efficient solutions that accommodate both users and businesses alike.
          </p>
          <p className={styles.paragraph}>
            Besides being a coding nerd, Hima is a strong communicator and team player. He loves engaging with
            cross-functional teams, including designers, product managers, and stakeholders, ensuring that the final
            product vibes with the goals and vision of everyone involved. Always on the lookout for new opportunities,
            Hima is keen to connect and work with fellow creative minds to craft innovative and user-centric digital
            experiences.
          </p>
          <p className={styles.paragraph}>
            When he&#39;s not coding, Hima enjoys watching movies, playing video games, and spending time with his
            family.
          </p>
          <p className={styles.paragraph}>
            Here is a full{' '}
            <Link href="/files/Himateja - Resume.pdf" target="_blank" aria-label="Download hima's résumé" tabIndex={0}>
              résumé
            </Link>{' '}
            of Hima&#39;s work experience and education.
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
