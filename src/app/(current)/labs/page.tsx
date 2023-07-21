import PageHeading from '@components/PageHeading'

export const metadata = {
  title: 'experiments · himateja.',
}

export default function LabsPage() {
  return (
    <>
      <PageHeading title="my experiments" />
      <div className="heading-container">
        <h2 className="heading">
          some of my <span className="text-blue-400 dark:text-white">work</span>
        </h2>
      </div>
    </>
  )
}
