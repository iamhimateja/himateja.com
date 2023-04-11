import Link from 'next/link'

import { Layout, Seo } from '@/components'
import { skills } from '@/lib/variables'
import Contact from '@/pages/about/Contact'

import styles from './styles.module.scss'

export default function About() {
  return (
    <Layout>
      <Seo pageTitle="About" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>About</h1>
          <p className={styles.paragraph}>Himateja Merlapaka is a full-stack engineer with a frontend focus.</p>
          <p className={styles.paragraph}>
            From personal projects to established companies, Hima has honed his skills in web development across a
            diverse range of applications, including UI/UX design, frontend technologies, and backend development using
            Node.js and Ruby on Rails.
          </p>
          <p className={styles.paragraph}>
            One of Hima&#39;s key strengths lies in his ability to understand project requirements and translate them
            into seamless and efficient solutions that cater to both users and businesses.
          </p>
          <p className={styles.paragraph}>
            Besides his development expertise, Hima is a strong communicator and collaborator. He actively engages with
            cross-functional teams, including designers, product managers, and stakeholders, to ensure that the final
            product aligns with the goals and vision of all parties involved. Passionate about exploring new
            opportunities, Hima is eager to connect and work with like-minded individuals to create innovative and
            user-centric digital experiences.
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
          <h2 className={styles.heading}>Get in Touch</h2>
          <p className={styles.paragraph}>
            Feel free to get in touch and let&#39;s have a discussion about how we can work together.
          </p>

          <Contact />
        </div>
      </div>
    </Layout>
  )
}
