import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import WrapperClientProviders from '@/components/common/WrapperClientProviders'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Todo List',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable}`}>
        <WrapperClientProviders>{children}</WrapperClientProviders>
      </body>
    </html>
  )
}
