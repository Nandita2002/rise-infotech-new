'use client'

import { useState, useEffect, type ComponentType } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Logo from '@/components/navbar/Logo'
import TopBar from '@/components/layout/Topbar'
import MobileMenu from '@/components/layout/MobileMenu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

import AdmissionPopupComponent from "@/components/popup/AdmissionPopup";


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
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>


      <header
        className={cn(
          "fixed  inset-x-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200"
            : "bg-white/95 border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Nav - items keep to a strict single-line flow */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
              <Link
                href="/about"
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
              >
                About
              </Link>

              {/* SAP Dropdown (Multi-column Megamenu style to prevent long vertical scrolling) */}
              <div className="group relative py-2">
                <Link
                  href="/sap-courses"
                  className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
                >
                  SAP ERP Courses
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute -left-12 top-full z-50 pt-2 opacity-0 transform translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-xl grid grid-cols-2 gap-x-2 w-[340px]">
                    {sapCourses.map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0769B4] whitespace-nowrap"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI & Data Science Dropdown */}
              <div className="group relative py-2">
                <Link
                  href="/ai-data-science"
                  className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
                >
                  AI & Data Science
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute -left-4 top-full z-50 pt-2 w-56 opacity-0 transform translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                    {aiCourses.map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0769B4] whitespace-nowrap"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Workshops Dropdown */}
              <div className="group relative py-2">
                <Link
                  href="/workshops"
                  className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
                >
                  Workshops
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute -left-4 top-full z-50 pt-2 w-56 opacity-0 transform translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                    {workshops.map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0769B4] whitespace-nowrap"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/corporate-training"
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
              >
                Corporate Training
              </Link>


              <Link
                href="/success-stories"
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Actions */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => setShowPopup(true)}
                className="hidden sm:flex items-center gap-2 rounded-xl bg-[#0769B4] px-5 py-2.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#055A99] hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                📅 Free Consultation
              </button>



              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  )
}