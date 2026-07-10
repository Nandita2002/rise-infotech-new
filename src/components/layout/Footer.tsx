'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

             <span className="rounded-full bg-[#EAF5FD] px-4 py-2 text-xs font-semibold text-[#0769B4]">
  SAP ERP
</span>

<span className="rounded-full bg-[#EAF5FD] px-4 py-2 text-xs font-semibold text-[#0769B4]">
  AI & Data Science
</span>

<span className="rounded-full bg-[#EAF5FD] px-4 py-2 text-xs font-semibold text-[#0769B4]">
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
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition hover:text-[#0769B4]
                  "
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/corporate-training"
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  Corporate Training
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 transition hover:text-[#0769B4]"
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
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  SAP MM
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  SAP SD
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  SAP FICO
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  SAP ABAP
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 transition hover:text-[#0769B4]"
                >
                  AI & Data Science
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

        <div>
          <h3 className="font-semibold mb-3 text-slate-900">Contact</h3>

          <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
            <FaPhoneAlt size={14} className="text-blue-600" />
            <a href="tel:+919110455125" className="hover:text-slate-900 transition">+91-9110455125</a>
          </div>

          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <FaEnvelope size={14} className="text-blue-600" />
            <a href="mailto:info@riseinfotech.in" className="hover:text-slate-900 transition">info@riseinfotech.in</a>
          </div>
        </div>

            {/* Social Icons */}
          <div className="flex gap-2 mt-2">
    
    {/* Instagram */}
    <a
      href="https://www.instagram.com/rise_infotech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md 
      bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
    >
      <FaInstagram size={14} className="text-white" />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1877F2]"
    >
      <FaFacebookF size={14} className="text-white" />
    </a>

    {/* X */}
    <a
      href="https://x.com/RiseInfotech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-black"
    >
      <FaXTwitter size={14} className="text-white" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/rise-infotech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A66C2]"
    >
      <FaLinkedinIn size={14} className="text-white" />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@rise_infotech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#FF0000]"
    >
      <FaYoutube size={14} className="text-white" />
    </a>

  </div>

          </div>

        </div>

      {/* Bottom Footer */}

<div className=" py-6 ">

  <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

    <p className="text-sm text-black/60">
      © {new Date().getFullYear()} Rise Infotech. All rights reserved.
    </p>

    <div className="flex flex-wrap items-center gap-6 text-sm">

      <Link
        href="/privacy-policy"
        className="text-black transition-colors duration-300 hover:text-blue-200"
      >
        Privacy Policy
      </Link>

      <Link
        href="/terms"
        className="text-black transition-colors duration-300 hover:text-blue-200"
      >
        Terms & Conditions
      </Link>

      <Link
        href="/contact"
        className="text-black transition-colors duration-300 hover:text-blue-200"
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