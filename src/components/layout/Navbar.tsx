'use client'

import { useState, useEffect, type ComponentType } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Logo from '@/components/navbar/Logo'
import TopBar from '@/components/layout/Topbar'
import MobileMenu from '@/components/layout/MobileMenu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'



// ======================
// SAP ERP Courses
// ======================

const sapFunctionalCourses = [
  { name: "SAP MM", href: "/courses/sap-mm" },
  { name: "SAP SD", href: "/courses/sap-sd" },
  { name: "SAP FICO", href: "/courses/sap-fico" },
  { name: "SAP PP", href: "/courses/sap-pp" },
  { name: "SAP QM", href: "/courses/sap-qm" },
  { name: "SAP PM", href: "/courses/sap-pm" },
  { name: "SAP EWM", href: "/courses/sap-ewm" },
];

const sapTechnicalCourses = [
  { name: "SAP ABAP", href: "/courses/sap-abap" },
  { name: "SAP BASIS", href: "/courses/sap-basis" },
  { name: "SAP BTP", href: "/courses/sap-btp" },

];

// ======================
// AI & Data Science
// ======================

const aiCourses = [
  {
    name: "Data Analytics & Power BI",
    href: "/courses/data-analytics-power-bi",
  },
];

// ======================
// Data Engineering
// ======================

const dataEngineeringCourses = [
  {
    name: "Azure Data Engineering",
    href: "/courses/azure-data-engineering",
  },
  {
    name: "Snowflake Data Engineering",
    href: "/courses/snowflake-data-engineering",
  },
  {
    name: "Databricks Data Engineering",
    href: "/courses/databricks-data-engineering",
  },
];

// ======================
// Others
// ======================

const otherLinks = [
  {
    name: "Corporate Training",
    href: "/courses/corporate-training",
  },
  {
    name: "Workshops",
    href: "/workshops&bootcamps",
  },
];

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
      <header
        className={cn(
          "fixed inset-x-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200"
            : "bg-white/95 border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-6">

          {/* Desktop Navbar */}
          <div className="hidden h-20 items-center lg:flex">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 items-center justify-center gap-6 xl:gap-8 whitespace-nowrap">

              {/* About */}
              <Link
                href="/about"
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
              >
                About
              </Link>
              {/* ================= SAP ERP ================= */}
              <div className="group relative py-2">
                <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]">
                  SAP ERP Courses

                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-[520px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                  <div className="grid grid-cols-2 gap-8">

                    {/* Functional */}
                    <div>
                      <h4 className="mb-3 border-b pb-2 text-sm font-bold uppercase tracking-wide text-[#0769B4]">
                        Functional Modules
                      </h4>

                      <div className="space-y-1">
                        {sapFunctionalCourses.map((course) => (
                          <Link
                            key={course.name}
                            href={course.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0769B4]"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Technical */}
                    <div>
                      <h4 className="mb-3 border-b pb-2 text-sm font-bold uppercase tracking-wide text-[#0769B4]">
                        Technical Modules
                      </h4>

                      <div className="space-y-1">
                        {sapTechnicalCourses.map((course) => (
                          <Link
                            key={course.name}
                            href={course.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0769B4]"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* ================= AI & DATA SCIENCE ================= */}
              <div className="group relative py-2">
                <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]">
                  AI & Data Science

                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                  {aiCourses.map((course) => (
                    <Link
                      key={course.name}
                      href={course.href}
                      className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0769B4]"
                    >
                      {course.name}
                    </Link>
                  ))}

                </div>
              </div>
              {/* ================= DATA ENGINEERING ================= */}
              <div className="group relative py-2">
                <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]">
                  Data Engineering

                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                  {dataEngineeringCourses.map((course) => (
                    <Link
                      key={course.name}
                      href={course.href}
                      className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0769B4]"
                    >
                      {course.name}
                    </Link>
                  ))}

                </div>
              </div>
              {/* ================= OTHERS ================= */}
              <div className="group relative py-2">
                <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]">
                  Others

                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                  {otherLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0769B4]"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
              </div>

              {/* Testimonials */}
              <Link
                href="/testimonials"
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#0769B4]"
              >
                Testimonials
              </Link>

            </nav>

            {/* Contact Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-[#0769B4] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#055A99] hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

          </div>

          {/* ================= Mobile Header ================= */}
          <div className="flex h-16 items-center justify-between lg:hidden">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>

          </div>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

    </>
  )
}