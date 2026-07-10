'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Calendar } from 'lucide-react'
import Logo from '@/components/navbar/Logo'
import TopBar from '@/components/layout/Topbar'
import MobileMenu from '@/components/layout/MobileMenu'
import { cn } from '@/lib/utils'


export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <TopBar />

      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-white border-b border-slate-100',
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop nav */}
           <nav className="hidden lg:flex items-center gap-8">

  <Link
    href="/"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    Home
  </Link>

  <Link
    href="/about"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    About
  </Link>

  <Link
    href="/sap-courses"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    SAP ERP Courses
  </Link>

  <Link
    href="/ai-data-science"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    AI & Data Science
  </Link>

  <Link
    href="/workshops&bootcamps"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    Workshops
  </Link>

  <Link
    href="/contact"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    Contact
  </Link>

</nav>

            {/* CTA + hamburger */}
           <div className="flex items-center gap-3">

  <Link
    href="/contact"
    className="hidden lg:inline-flex items-center gap-2 bg-[#0769B4] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#055A99] hover:shadow-lg hover:shadow-[#123498]/30"
  >
    <Calendar size={15} />
    Free Consultation
  </Link>

  {/* Mobile hamburger */}
  <button
    onClick={() => setIsMobileOpen(true)}
    className="p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
    aria-label="Open menu"
  >
    <Menu size={22} />
  </button>

</div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  )
}