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
    <footer className="bg-slate-800 text-slate-300">
      <Container>

        {/* Main Footer */}

        <div className="grid gap-12 py-14 lg:grid-cols-4">

          {/* Company */}

          <div>
            <Image
              src="/Rise_infotech.jpg"
              alt="Rise Infotech"
              width={185}
              height={85}
              className="h-auto"
            />

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Empowering students and professionals with
              industry-focused SAP ERP, Data Science,
              Corporate Training and Placement Assistance.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/courses" className="hover:text-blue-400">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Popular Courses */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-sm">

              <li>SAP MM</li>
              <li>SAP SD</li>
              <li>SAP FICO</li>
              <li>SAP ABAP</li>
              <li>Data Science</li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <p className="flex gap-3">
                <Phone size={18} className="mt-0.5 text-blue-400" />
                +91 91104 55125
              </p>

              <p className="flex gap-3">
                <Mail size={18} className="mt-0.5 text-blue-400" />
                info@riseinfotech.in
              </p>

              <p className="flex gap-3">
                <MapPin size={18} className="mt-0.5 text-blue-400" />
                Vijayanagar, Bengaluru
              </p>

            </div>

            {/* Social Icons */}

            <div className="mt-6 flex gap-4">

              <a
                href="https://www.linkedin.com/company/rise-infotech/"
                target="_blank"
                className="rounded-full bg-slate-800 p-2 hover:bg-blue-600"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/rise_infotech/"
                target="_blank"
                className="rounded-full bg-slate-800 p-2 hover:bg-pink-600"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
                target="_blank"
                className="rounded-full bg-slate-800 p-2 hover:bg-blue-700"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.youtube.com/@rise_infotech"
                target="_blank"
                className="rounded-full bg-slate-800 p-2 hover:bg-red-600"
                rel="noopener noreferrer"
              >
                <Youtube size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Rise Infotech. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </Container>
    </footer>
  )
}