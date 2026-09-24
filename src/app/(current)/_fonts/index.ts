import localFont from 'next/font/local'

/* The site's fonts, as css variables on <body>. Shared by the root layout and the global 404
   page, which renders its own document. */

const pxllFont = localFont({ src: './pxll-webfont.woff2', variable: '--pixel-font-family' })

const workSans = localFont({
  src: './work-sans-latin-wght-normal.woff2',
  style: 'normal',
  weight: '100 900',
  variable: '--font-work-sans',
  display: 'swap',
})

/* Work Sans italic is its own family, so it is not preloaded and only downloads when italic text
   is shown. Use it only on italic text (the font-sans-italic class): a family with just an italic
   face is also used for normal text. adjustFontFallback is off so that, while it loads, the text
   falls back to Work Sans and not to Arial. */
const workSansItalic = localFont({
  src: './work-sans-latin-wght-italic.woff2',
  style: 'italic',
  weight: '100 900',
  variable: '--font-work-sans-italic',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
})

/* Only used for the version wheel title, so it is not preloaded. */
const sacramento = localFont({
  src: './sacramento-latin-400-normal.woff2',
  weight: '400',
  variable: '--font-sacramento',
  display: 'swap',
  preload: false,
})

/* Geist Mono from the geist package (same settings), cut down to Latin, punctuation, arrows, box
   drawing and symbols. All weights are kept. It is 31KB instead of 72KB. Made with:
   pyftsubset GeistMono-Variable.woff2 --flavor=woff2 --name-IDs='*' --unicodes="U+0000-00FF,U+0131,
   U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,
   U+2190-21FF,U+2200-22FF,U+2300-23FF,U+2500-257F,U+25A0-25FF,U+2700-27BF,U+FEFF,U+FFFD" */
const geistMono = localFont({
  src: './geist-mono-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-geist-mono',
  adjustFontFallback: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Roboto Mono',
    'Menlo',
    'Monaco',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Courier New',
    'monospace',
  ],
})

export const fontClassName = `${pxllFont.variable} ${workSans.variable} ${workSansItalic.variable} ${sacramento.variable} ${geistMono.variable}`
