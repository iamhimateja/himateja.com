import dynamic from 'next/dynamic'
import localFont from 'next/font/local'

const ScrambleHeading = dynamic(() => import('@components/ScrambleHeading'), { ssr: false })

const pxllFont = localFont({ src: './_fonts/pxll-webfont.woff2' })

export default function HomePage() {
  return (
    <ScrambleHeading
      text="himateja."
      className={pxllFont.className}
      style={{ color: '#fff', fontSize: '3rem', letterSpacing: '1px' }}
    />
  )
}
