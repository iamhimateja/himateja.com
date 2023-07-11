'use client'

import Script from 'next/script'

const GoogleAnalytics = () => {
  return (
    <>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-GT78JPR2RG" />
      <Script strategy="lazyOnload" id="googleAnalyticsScript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }

          gtag('js', new Date());

          gtag('config', 'G-GT78JPR2RG', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
