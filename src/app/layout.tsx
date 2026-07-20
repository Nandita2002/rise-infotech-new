import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from "@/components/sections/WhatsappButton";
import Script from 'next/script';



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

        {/* Zoho SalesIQ */}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: function () {}
      };
    `}
        </Script>

        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqa90ba803a545748bfafab418dfca61789d44211cec6e926ecdb24af08108e649"
          strategy="afterInteractive"
        />

        <Navbar />


        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  )
}