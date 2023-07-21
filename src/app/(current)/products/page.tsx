import PageHeading from '@components/PageHeading'

export const metadata = {
  title: 'products · himateja.',
}

export default function ProductPage() {
  return (
    <>
      <PageHeading title="my products" />
      <div className="heading-container">
        <h2 className="heading">
          things i&apos;ve <span className="text-blue-400 dark:text-white">made</span>
        </h2>
      </div>
    </>
  )
}
