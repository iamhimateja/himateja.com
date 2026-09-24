import ExperienceSection from '@v-1/_components/ExperienceSection'
import Experiments from '@v-1/_components/HomePage/Experiments'
import NameInfo from '@v-1/_components/HomePage/NameInfo'
import Stack from '@v-1/_components/HomePage/Stack'
import { Icons } from '@v-1/_components/Icons'
import SectionHeading from '@v-1/_components/SectionHeading'

export default function HomePage() {
  return (
    <>
      <NameInfo />
      <div className="paragraph font-sm">
        <div className="flex gap-4">
          <div className="flex gap-2 place-items-center text-sm">
            <Icons.Pin className="w-5 h-5" />
            Bengaluru, India
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

      <p>Off work: movies, video games, and family time.</p>

      {/* <p>
        Currently perfecting{' '}
        <Link href="/v-1/products/slug" className="link">
          slug.
        </Link>
      </p> */}

      <section>
        <SectionHeading title="recent experience" />
        <ExperienceSection />
      </section>

      {/* <section>
        <SectionHeading
          title="products"
          pageLink="/v-1/products"
          label="Open to view all products"
          pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
        />

        <MiniProductsList />
      </section> */}

      {/* <section>
        <SectionHeading
          title="writing"
          pageLink="/v-1/articles"
          label="Open to view all articles"
          pageLinkContent={<Icons.PXLArrowRight  aria-hidden="true"/>}
        />
      </section> */}

      <section>
        <SectionHeading
          title="stack"
          pageLink="/v-1/stack"
          label="Open to view all stack"
          pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
        />

        <Stack />
      </section>

      <section>
        <SectionHeading
          title="experiments"
          pageLink="/v-1/labs"
          label="Open to view all experiments"
          pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
        />

        <Experiments />
      </section>
    </>
  )
}
