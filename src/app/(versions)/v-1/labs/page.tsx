import PageHeading from '@v-1/_components/PageHeading'

import Experiments from '@/app/(versions)/v-1/_components/HomePage/Experiments'

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

      <Experiments showAll />
    </>
  )
}
