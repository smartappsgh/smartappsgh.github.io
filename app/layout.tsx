import { Jost } from 'next/font/google'
import favicon from '@/public/favicon.ico'

const jost = Jost({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href={ favicon.src } type="image/x-icon" />
      </head>
      <body className={ jost.className }>
        <header>
        </header>
        { children }
      </body>
    </html>
  )
}
