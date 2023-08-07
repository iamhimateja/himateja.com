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
          some of my <span className="text-[color:var(--default-theme-color)] dark:text-white">work</span>
        </h2>
      </div>
    </>
  )
}
