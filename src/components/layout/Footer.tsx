'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react'

import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      {/* Top Blue Line */}

      <div className="h-1 w-full bg-gradient-to-r from-grey-700 via-grey-500 to-grey-700" />

      <Container>

        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* ================= COMPANY ================= */}

          <div>

            <Image
              src="/Rise_infotech.jpg"
              alt="Rise Infotech"
              width={190}
              height={70}
              className="h-auto"
            />

            <p className="mt-6 max-w-sm leading-7 text-slate-600">
              Empowering students and professionals with
              industry-focused SAP ERP, Artificial Intelligence,
              Data Science, Corporate Training and Placement
              Assistance through practical learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                SAP ERP
              </span>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                AI & Data Science
              </span>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                Workshops
              </span>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/corporate-training"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Corporate Training
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= POPULAR COURSES ================= */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Popular Courses
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  SAP MM
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  SAP SD
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  SAP FICO
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  SAP ABAP
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  AI & Data Science
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-slate-600">

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-1 text-blue-600"
                />

                <span>
                  +91 91104 55125
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 text-blue-600"
                />

                <span>
                  info@riseinfotech.in
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-blue-600"
                />

                <span>
                  Vijayanagar,
                  <br />
                  Bengaluru,
                  Karnataka
                </span>

              </div>

            </div>

            {/* Social Icons */}
                        <div className="mt-8 flex gap-3">

              <a
                href="https://www.linkedin.com/company/rise-infotech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/rise_infotech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.youtube.com/@rise_infotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Youtube size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-slate-200 py-6">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Rise Infotech. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">

              <Link
                href="/privacy-policy"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>
  )
}