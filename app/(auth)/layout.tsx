import type { Metadata } from 'next'

import { Header } from '@components/layout'

export const metadata: Metadata = {
    title: 'Welcome to Auth Page',
    description: 'Login | Register'
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <body suppressHydrationWarning={true}>
            <Header />
            {children}
        </body>
        </html>
    )
}
