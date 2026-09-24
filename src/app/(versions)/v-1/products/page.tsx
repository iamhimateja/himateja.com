import PageHeading from '@v-1/_components/PageHeading'
import WorkItems from '@v-1/_components/WorkItems'

export const metadata = {
  title: 'products · himateja.',
}

export default function ProductPage() {
  return (
    <>
      <PageHeading title="my products" />
      <div className="heading-container">
        <h2 className="heading">
          things i&apos;ve <span className="text-[color:var(--default-theme-color)] dark:text-white">made</span>
          {' , '}
          <span className="text-[color:var(--default-theme-color)] dark:text-white">working on</span>
        </h2>
      </div>

      <WorkItems type="products" />
    </>
  )
}
