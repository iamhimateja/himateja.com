import ExperienceSection from '@components/ExperienceSection'
import NameInfo from '@components/HomePage/NameInfo'
import Stack from '@components/HomePage/Stack'
import SectionHeading from '@components/SectionHeading'
import ArrowRight from '@icons/ArrowRight'

export default function HomePage() {
  return (
    <>
      <NameInfo />
      <p className="font-sm">
        <span className="pulseAnimation" /> Available for new opportunities.
      </p>

      <p>
        Full-stack engineer, creative spirit, a perfectionist at heart, with an enthusiasm for frontend technologies and
        an excitement for the instant gratification it provides.
      </p>

      <p>
        A dedicated team player off the coding field, cherishing collaboration, movies, video games, and family time.
      </p>

      {/* <p>
        Currently perfecting{' '}
        <Link href="/products/slug" className="link">
          slug.
        </Link>
      </p> */}

      <section>
        <SectionHeading title="recent experience" />
        <ExperienceSection />
      </section>

      <section>
        <SectionHeading
          title="products"
          pageLink="/products"
          pageLinkText={
            <>
              All
              <ArrowRight />
            </>
          }
        />
      </section>

      <section>
        <SectionHeading
          title="experiments"
          pageLink="/labs"
          pageLinkText={
            <>
              All
              <ArrowRight />
            </>
          }
        />
      </section>

      {/* <section>
        <SectionHeading
          title="writing"
          pageLink="/articles"
          pageLinkText={
            <>
              All
              <ArrowRight />
            </>
          }
        />
      </section> */}

      <section>
        <SectionHeading
          title="stack"
          pageLink="/stack"
          pageLinkText={
            <>
              All
              <ArrowRight />
            </>
          }
        />

        <Stack />
      </section>
    </>
  )
}
