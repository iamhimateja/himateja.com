import PageHeading from '@components/PageHeading'
import WorkItems from '@components/WorkItems'

export const metadata = {
  title: 'articles · himateja.',
}

export default function BlogPage() {
  return (
    <>
      <PageHeading title="my blog" />
      <div className="heading-container">
        <h2 className="heading">
          some of my <span className="text-blue-400 dark:text-white">writings</span>
        </h2>
      </div>

      <WorkItems type="articles" />

      <div className="flex items-center place-content-center p-12">
        <span className="text-base text-[color:var(--default-text)] p-4">coming soon...</span>
      </div>
    </>
  )
}
