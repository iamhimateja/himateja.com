import ExperienceSection from '@components/ExperienceSection'
import Experiments from '@components/HomePage/Experiments'
import MiniProductsList from '@components/HomePage/MiniProductsList'
import NameInfo from '@components/HomePage/NameInfo'
import Stack from '@components/HomePage/Stack'
import { Icons } from '@components/Icons'
import SectionHeading from '@components/SectionHeading'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <NameInfo />
      <div className="paragraph font-sm">
        <div className="flex gap-4">
          <div className="flex gap-2 place-items-center text-sm">
            <Icons.Pin className="w-5 h-5" />
            Andhra Pradesh, India
          </div>
          <div className="text-sm">
            <span className="pulseAnimation" /> Open for new opportunities.
          </div>
        </div>
      </div>

      <p>
        Full-stack engineer, creative spirit, a perfectionist at heart, with an enthusiasm for frontend technologies and
        an excitement for the instant gratification it provides.
      </p>

      <p>
        A dedicated team player off the coding field, cherishing collaboration, movies, video games, and family time.
      </p>

      <p>
        Currently perfecting{' '}
        <Link href="/products/slug" className="link">
          slug.
        </Link>
      </p>

      <section>
        <SectionHeading title="recent experience" />
        <ExperienceSection />
      </section>

      <section>
        <SectionHeading
          title="products"
          pageLink="/products"
          label="Open to view all products"
          pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
        />

        <MiniProductsList />
      </section>

      <section>
        <SectionHeading
          title="experiments"
          pageLink="/labs"
          label="Open to view all experiments"
          pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
        />

        <Experiments />
      </section>

      {/* <section>
        <SectionHeading
          title="writing"
          pageLink="/articles"
          label="Open to view all articles"
          pageLinkContent={<Icons.PXLArrowRight  aria-hidden="true"/>}
        />
      </section> */}

      <section>
        <SectionHeading
          title="stack"
          pageLink="/stack"
          label="Open to view all stack"
          pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
        />

        <Stack />
      </section>
    </>
  )
}
