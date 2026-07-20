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
const year = new Date().getFullYear();
export default function Footer() {
  return (

    <footer className="bg-gradient-to-b from-[#055A99] to-[#0769B4] text-white">

      <Container>

        {/* Main Footer */}
        <div className="grid gap-8 py-8 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">

          {/* ================= COMPANY ================= */}
          <div>

            <Image
              src="/Rise_infotech.jpg"
              alt="Rise Infotech"
              width={165}
              height={60}
              className="h-auto w-auto"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100">
              Bengaluru's trusted SAP, AI & Data Science training institute
              delivering industry-focused courses, certification guidance and
              placement assistance.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className=" hidden md:block">

            <h3 className="mb-3 text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-sm">

              <li><Link href="/" className="text-blue-100">Home</Link></li>

              <li><Link href="/about" className="text-blue-100">About Us</Link></li>

              <li><Link href="/courses" className="text-blue-100">Courses</Link></li>

              <li><Link href="/corporate-training" className="text-blue-100">Corporate Training</Link></li>

              <li><Link href="/contact" className="text-blue-100">Contact</Link></li>

            </ul>

          </div>

          {/* ================= COURSES ================= */}
          <div className=" hidden md:block">

            <h3 className="mb-3 text-base font-semibold text-white">
              Popular Courses
            </h3>

            <ul className="space-y-2.5 text-sm">

              <li><Link href="/courses" className="text-blue-100">SAP MM</Link></li>

              <li><Link href="/courses" className="text-blue-100">SAP SD</Link></li>

              <li><Link href="/courses" className="text-blue-100">SAP FICO</Link></li>

              <li><Link href="/courses" className="text-blue-100">SAP ABAP</Link></li>

              <li><Link href="/courses" className="text-blue-100">AI & Data Science</Link></li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="mb-3 text-base font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-2 text-sm text-blue-100">
                <FaPhoneAlt size={13} className="text-white" />
                <a href="tel:+919110455125">
                  +91 9110455125
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-100">
                <FaEnvelope size={13} className="text-white" />
                <a href="mailto:info@riseinfotech.in">
                  info@riseinfotech.in
                </a>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2">

              <a
                href="https://www.instagram.com/rise_infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
              >
                <FaInstagram size={14} className="text-white" />
              </a>

              <a
                href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1877F2]"
              >
                <FaFacebookF size={14} className="text-white" />
              </a>

              <a
                href="https://x.com/RiseInfotech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black"
              >
                <span className="text-xs font-bold text-white">𝕏</span>
              </a>

              <a
                href="https://www.linkedin.com/company/rise-infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2]"
              >
                <FaLinkedinIn size={14} className="text-white" />
              </a>

              <a
                href="https://www.youtube.com/@rise_infotech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000]"
              >
                <FaYoutube size={14} className="text-white" />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-400/30 py-4">

          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">

            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} Rise Infotech. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm">

              <Link href="/privacy-policy" className="text-blue-100">
                Privacy Policy
              </Link>

              <Link href="/terms" className="text-blue-100">
                Terms & Conditions
              </Link>

              <Link href="/contact" className="text-blue-100">
                Contact
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>

  )
}