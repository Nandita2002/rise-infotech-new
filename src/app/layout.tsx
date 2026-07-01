import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Rise Infotech – Build Your SAP Career with Industry Experts',
  description:
    'Learn SAP Functional & Technical Modules through live instructor-led sessions, real-time projects, certification guidance and dedicated placement assistance.',
  keywords: [
    'SAP Training',
    'SAP Courses',
    'SAP MM',
    'SAP SD',
    'SAP FICO',
    'SAP ABAP',
    'SAP BASIS',
    'SAP HANA',
    'Corporate Training',
    'Data Science',
    'Rise Infotech',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}