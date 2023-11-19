import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import AuthProvider from './auth/Provider'
import GoogleAnaliticsScripts from './GoogleAnaliticsScripts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnaliticsScripts />
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className='p-5'>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
