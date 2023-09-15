import type { Metadata } from 'next'

import '@styles/globals.css'
import { Footer, Header } from '@components/layout'

export const metadata: Metadata = {
    title: 'Home Page | Posts',
    description: 'Posts',
    keywords: ['Home', 'Posts', 'post'],
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon-32.png'
        }
    ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
      <section className='app'>
          <Header />
          <main className='app-content'>
              {children}
          </main>
          <Footer />
      </section>
      </body>
    </html>
  )
}
