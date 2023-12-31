import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon',
  icons: {
    icon: './pokebola.ico',
    shortcut: './pokebola.ico',
    apple: './pokebola.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          {<link rel='icon' href='./favicon.ico'/>}
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
