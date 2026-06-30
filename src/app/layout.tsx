import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rise Infotech – Build Your SAP Career with Industry Experts',
  description:
    'Learn SAP Functional & Technical Modules through live instructor-led sessions, real-time projects, certification guidance and dedicated placement assistance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
