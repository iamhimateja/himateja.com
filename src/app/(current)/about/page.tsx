import ExperienceSection from '@components/ExperienceSection'
import PageHeading from '@components/PageHeading'

import SectionHeading from '@/app/(current)/_components/SectionHeading'

export const metadata = {
  title: 'about · himateja.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeading title="about me" />
      <div className="heading-container">
        <h2 className="heading">
          a peek into my <span className="text-[color:var(--default-theme-color)] dark:text-white">life</span> and{' '}
          <span className="text-[color:var(--default-theme-color)] dark:text-white">career</span>
        </h2>
      </div>

      <p>
        Namaste! I&#39;m Himateja, a seasoned full-stack engineer passionate about shaping the digital world one line of
        code at a time.
      </p>

      <p>
        I enjoy building fast, intuitive interfaces and turning complex ideas into simple, scalable products. I value
        clean design, collaboration, and solving real-world problems through code.
      </p>

      <section>
        <SectionHeading title="experience" />
        <ExperienceSection showAll />
      </section>
    </>
  )
}
