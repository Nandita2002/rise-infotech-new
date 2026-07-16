'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Calendar } from 'lucide-react'
import Logo from '@/components/navbar/Logo'
import TopBar from '@/components/layout/Topbar'
import MobileMenu from '@/components/layout/MobileMenu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const sapCourses = [
  { name: "SAP MM", href: "/courses/sap-mm" },
  { name: "SAP SD", href: "/courses/sap-sd" },
  { name: "SAP FICO", href: "/courses/sap-fico" },
  { name: "SAP EWM", href: "/courses/sap-ewm" },
  { name: "SAP PP", href: "/courses/sap-pp" },
  { name: "SAP QM", href: "/courses/sap-qm" },
  { name: "SAP PM", href: "/courses/sap-pm" },
  { name: "SAP ABAP", href: "/courses/sap-abap" },
  { name: "SAP BASIS", href: "/courses/sap-basis" },
  { name: "SAP BTP", href: "/courses/sap-btp" },
]

const aiCourses = [
  { name: "Python Programming", href: "/courses/python" },
  { name: "Data Science", href: "/courses/data-science" },
  { name: "Machine Learning", href: "/courses/machine-learning" },
  { name: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
  { name: "Power BI", href: "/courses/power-bi" },
]

const workshops = [
  { name: "SAP Workshop", href: "/workshops/sap" },
  { name: "Data Science Workshop", href: "/workshops/data-science" },
  { name: "Corporate Bootcamp", href: "/workshops/corporate" },
]

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
    href="/about"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    About
  </Link>

 <div className="group relative">

  <Link
    href="/sap-courses"
    className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#0769B4]"
  >
    SAP ERP Courses
    <ChevronDown size={15} />
  </Link>

  <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

    {sapCourses.map((course) => (

      <Link
        key={course.name}
        href={course.href}
        className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[#0769B4]"
      >
        {course.name}
      </Link>

    ))}

  </div>

</div>

<div className="group relative">

  <Link
    href="/ai-data-science"
    className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#0769B4]"
  >
    AI & Data Science
    <ChevronDown size={15} />
  </Link>

  <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

    {aiCourses.map((course) => (

      <Link
        key={course.name}
        href={course.href}
        className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[#0769B4]"
      >
        {course.name}
      </Link>

    ))}

  </div>

</div>

<div className="group relative">

  <Link
    href="/workshops&bootcamps"
    className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#0769B4]"
  >
    Workshops
    <ChevronDown size={15} />
  </Link>

  <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

    {workshops.map((course) => (

      <Link
        key={course.name}
        href={course.href}
        className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[#0769B4]"
      >
        {course.name}
      </Link>

    ))}

  </div>

</div>


   <Link
    href="/corporate-training"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    Corporate Training
  </Link>

  <Link
    href="/contact"
    className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
  >
    Contact
  </Link>

</nav>


{/* CTA + Mobile Menu */}
<div className="flex items-center gap-3">

  {/* Desktop CTA */}
  <Link
    href="/contact"
    className="hidden items-center gap-2 rounded-lg bg-[#0769B4] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#055A99] hover:shadow-lg lg:inline-flex"
  >
    <Calendar size={15} />
    Free Consultation
  </Link>

  {/* Mobile Hamburger */}
  <button
    onClick={() => setIsMobileOpen(true)}
    className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
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