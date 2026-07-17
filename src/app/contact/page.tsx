'use client'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Send,
  ExternalLink,
} from 'lucide-react'

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa'

import { FaXTwitter } from 'react-icons/fa6'

import React, { useState } from 'react'

import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQ from '@/components/sections/FAQ'


import type { ContactFormData } from '@/types'
import CTA from '@/components/ui/CTA'

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    alert('Thank you! We will contact you shortly.')
  }

  return (
    <>
      <section className="py-14 lg:py-16">
        <Container>

          <div className="grid gap-6 lg:grid-cols-5">

            {/* LEFT */}

            <div className="space-y-8 lg:col-span-2">

              <SectionHeading
                badge="Get In Touch"
                title="Talk to Our Experts"
                align="left"
              />

              {/* Phone */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">
                    <Phone size={26} />
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Call Us
                    </h3>

                    <p className="mt-2 text-slate-600">
                      +91 91104 55125
                    </p>

                    <a
                      href="tel:+919110455125"
                      className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                    >
                      Call Now
                      <ExternalLink size={16} />
                    </a>

                  </div>

                </div>

              </div>

              {/* Email */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-green-50 p-4 text-green-600">
                    <Mail size={26} />
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Email Us
                    </h3>

                    <p className="mt-2 text-slate-600 break-all">
                      info@riseinfotech.in
                    </p>

                    <a
                      href="mailto:info@riseinfotech.in"
                      className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                    >
                      Send Email
                      <ExternalLink size={16} />
                    </a>

                  </div>

                </div>

              </div>




            </div>

            {/* RIGHT */}

            <div className="lg:col-span-3">

              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

                <SectionHeading
                  badge="Free Consultation"
                  title="Book Your Free Career Consultation"
                  description="Fill in the details below and our career counsellor will get back to you."
                  align="left"
                />

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-3"
                >

                  <div className="grid gap-5 md:grid-cols-2">

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-600"
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-600"
                    />

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-600"
                    />

                    <select
                      name="course"
                      title="Select a Course"
                      value={form.course}
                      onChange={handleChange}
                      className="rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-600"
                    >
                      <option value="">Select Course</option>

                      <optgroup label="SAP ERP Courses">
                        <option>SAP MM</option>
                        <option>SAP SD</option>
                        <option>SAP FICO</option>
                        <option>SAP ABAP</option>
                        <option>SAP BASIS</option>
                      </optgroup>

                      <optgroup label="AI & Data Science">
                        <option>AI Powered Data Analytics</option>
                        <option>Azure Data Engineering</option>
                      </optgroup>

                      <optgroup label="Other Programs">
                        <option>Workshops & Bootcamps</option>
                        <option>Corporate Training</option>
                      </optgroup>

                      <optgroup label="General Inquiry">
                        <option>General Inquiry</option>
                      </optgroup>

                    </select>

                  </div>

                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
                  />

                  <button
                    className="inline-flex items-center gap-2 bg-[#0769B4] px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#055A99] hover:shadow-lg hover:shadow-[#123498]/30"
                  >
                    Book Free Consultation
                    <Send size={18} />
                  </button>

                </form>
              </div>
            </div>
          </div>


        </Container>
      </section>

      {/* ================= VISIT OUR CAMPUS ================= */}

      <section className="bg-slate-50 py-14 lg:py-16">
        <Container>

          <SectionHeading
            badge="Visit Our Campus"
            title="Come Meet Us in Bengaluru"
            description="Whether you're visiting for counselling, demo classes or admissions, we're always happy to welcome you."
          />

          <div className="mt-10 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">

            <div className="grid lg:grid-cols-5">

              {/* ================= GOOGLE MAP ================= */}

              <div className="lg:col-span-3">

                <iframe
                  title="Rise Infotech"
                  src="https://www.google.com/maps?q=Rise+Infotech+Vijayanagar+Bangalore&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="min-h-[620px] w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

              {/* ================= ADDRESS PANEL ================= */}

              <div className="flex flex-col justify-between bg-white p-6 lg:col-span-2">

                <div>

                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0769B4]">
                    Reach Us
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    Rise Infotech
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Visit our training centre for counselling, admissions and classroom training.
                  </p>

                  {/* Address */}

                  <div className="mt-5 flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <MapPin size={18} />
                    </div>

                    <div>

                      <h4 className="text-sm font-semibold text-slate-900">
                        Office Address
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        52/E GF, 15th Main Road,<br />
                        Near Vidya Eye Clinic,<br />
                        SBI Staff Colony,<br />
                        Hoshalli Extension, Stage 1,<br />
                        Vijayanagar,<br />
                        Bengaluru - 560040
                      </p>

                    </div>

                  </div>

                </div>

                {/* Button */}

                <div className="mt-6">

                  <a
                    href="https://maps.google.com/?q=Rise+Infotech+Vijayanagar+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0769B4] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#055A99]"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>

                </div>

              </div>
            </div>

          </div>

        </Container>
      </section>


      {/* ================= OFFICE HOURS & CONNECT ================= */}



      {/* ================= FAQ ================= */}

      <FAQ />

      {/* ================= CTA ================= */}

      <CTA
        badge="Ready to Start?"
        title="Your SAP Career Starts Here"
        description="Whether you're a student, fresher or working professional, our experts are here to guide you toward the right SAP or Data Science career path."
        primaryButtonText="Explore Courses"
        primaryButtonHref="/courses"
        secondaryButtonText="Call +91 91104 55125"
        secondaryButtonHref="tel:+919110455125"
      />

    </>
  )
}