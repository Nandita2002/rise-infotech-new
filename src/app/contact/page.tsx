'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ExternalLink,
} from 'lucide-react'

import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQ from '@/components/sections/FAQ'
import { Share2 } from 'lucide-react'

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
      <PageHero
        badge="Contact Us"
        title="Let's Build Your Career Together"
        description="Whether you're exploring SAP, Data Science, Corporate Training or Workshops, our experts are here to guide you."
      />

      <section className="py-20 lg:py-28">
        <Container>

          <div className="grid gap-12 lg:grid-cols-5">

            {/* LEFT */}

            <div className="space-y-8 lg:col-span-2">

              <SectionHeading
                badge="Get In Touch"
                title="Talk to Our Experts"
                description="Choose any of the following ways to connect with Rise Infotech."
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

              {/* WhatsApp */}

              <div className="rounded-3xl border border-green-200 bg-green-50 p-6">

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-green-100 p-4 text-green-700">
                    <MessageCircle size={26} />
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      WhatsApp
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Chat directly with our counsellor.
                    </p>

                    <a
                      href="https://wa.me/919110455125?text=Hi%20Rise%20Infotech,%20I%20am%20interested%20in%20your%20courses."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-white font-semibold transition hover:bg-green-700"
                    >
                      Chat on WhatsApp
                    </a>

                  </div>

                </div>

              </div>

              {/* Google Rating */}

              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">

                <div className="flex items-center gap-3">

                  <Star
                    fill="currentColor"
                    className="text-yellow-300"
                  />

                  <span className="text-3xl font-bold">
                    5.0
                  </span>

                </div>

                <p className="mt-2 text-blue-100">
                  Rated by
                  <span className="font-bold text-white">
                    {' '}162+ Google Reviews
                  </span>
                </p>

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
                  className="mt-10 space-y-5"
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
                    className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
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

<section className="bg-slate-50 py-20 lg:py-28">
  <Container>

    <SectionHeading
      badge="Visit Our Campus"
      title="Come Meet Us in Bengaluru"
      description="Whether you're visiting for counselling, demo classes or admissions, we're always happy to welcome you."
    />

    <div className="mt-16 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">

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

        <div className="flex flex-col justify-between bg-white p-10 lg:col-span-2">

          <div>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Reach Us
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              Rise Infotech
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Visit our training centre for career counselling,
              classroom sessions, admissions and corporate discussions.
            </p>

            {/* Address */}

            <div className="mt-10 flex gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <MapPin size={24} />
              </div>

              <div>

                <h4 className="font-semibold text-slate-900">
                  Office Address
                </h4>

                <p className="mt-2 leading-7 text-slate-600">
                  52/E GF,
                  
                  15th Main Road,
                
                  Near Vidya Eye Clinic,
                  
                  SBI Staff Colony,
                 
                  Hoshalli Extension,
                 
                  Stage 1,
                 
                  Vijayanagar,
                  
                  Bengaluru,
                  
                  Karnataka – 560040
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="mt-8 flex gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Phone size={22} />
              </div>

              <div>

                <h4 className="font-semibold text-slate-900">
                  Phone
                </h4>

                <a
                  href="tel:+919110455125"
                  className="mt-2 block text-slate-600 transition hover:text-blue-600"
                >
                  +91 91104 55125
                </a>

              </div>

            </div>

            {/* Email */}

            <div className="mt-8 flex gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Mail size={22} />
              </div>

              <div>

                <h4 className="font-semibold text-slate-900">
                  Email
                </h4>

                <a
                  href="mailto:info@riseinfotech.in"
                  className="mt-2 block break-all text-slate-600 transition hover:text-blue-600"
                >
                  info@riseinfotech.in
                </a>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 space-y-4">

            <a
              href="https://maps.google.com/?q=Rise+Infotech+Vijayanagar+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
            >
              <MapPin size={18} />
              Get Directions
            </a>

            <a
              href="tel:+919110455125"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <Phone size={18} />
              Call Now
            </a>

          </div>

        </div>

      </div>

    </div>

  </Container>
</section>


{/* ================= OFFICE HOURS & CONNECT ================= */}

<section className="bg-white py-20 lg:py-28">
  <Container>

    <SectionHeading
      badge="Stay Connected"
      title="We're Here When You Need Us"
      description="Reach out during our working hours or stay connected with us through our social media channels."
    />

    <div className="mt-16 grid gap-10 lg:grid-cols-2">

      {/* ================= OFFICE HOURS ================= */}

      <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <Clock size={30} />
          </div>

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Office Hours
            </h3>

            <p className="text-slate-500">
              Visit or contact us during the following timings.
            </p>

          </div>

        </div>

        <div className="space-y-5">

          {[
            ['Monday', '9:00 AM - 7:00 PM'],
            ['Tuesday', '9:00 AM - 7:00 PM'],
            ['Wednesday', '9:00 AM - 7:00 PM'],
            ['Thursday', '9:00 AM - 7:00 PM'],
            ['Friday', '9:00 AM - 7:00 PM'],
            ['Saturday', '9:00 AM - 5:00 PM'],
            ['Sunday', '9:00 AM - 2:00 PM'],
          ].map(([day, time]) => (
            <div
              key={day}
              className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-sm"
            >
              <span className="font-medium text-slate-700">
                {day}
              </span>

              <span className="font-semibold text-blue-600">
                {time}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* ================= SOCIAL MEDIA ================= */}

      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-10 text-white">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          Follow Rise Infotech
        </span>

        <h3 className="mt-6 text-4xl font-bold">
          Join Our Learning Community
        </h3>

        <p className="mt-5 leading-8 text-blue-100">
          Follow us for SAP updates, free workshops, placement drives,
          certification tips and career opportunities.
        </p>

        <div className="mt-10 space-y-4">

          <a
            href="https://www.linkedin.com/company/rise-infotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-white/10 px-6 py-4 transition hover:bg-white hover:text-blue-700"
          >
            <div className="flex items-center gap-4">
              <Linkedin size={22} />
              <span className="font-semibold">LinkedIn</span>
            </div>

            <ExternalLink size={18} />
          </a>

          <a
            href="https://www.instagram.com/rise_infotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-white/10 px-6 py-4 transition hover:bg-white hover:text-pink-600"
          >
            <div className="flex items-center gap-4">
              <Instagram size={22} />
              <span className="font-semibold">Instagram</span>
            </div>

            <ExternalLink size={18} />
          </a>

          <a
            href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-white/10 px-6 py-4 transition hover:bg-white hover:text-blue-700"
          >
            <div className="flex items-center gap-4">
              <Facebook size={22} />
              <span className="font-semibold">Facebook</span>
            </div>

            <ExternalLink size={18} />
          </a>

          <a
            href="https://x.com/RiseInfotech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-white/10 px-6 py-4 transition hover:bg-white hover:text-slate-900"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">𝕏</span>
              <span className="font-semibold">X (Twitter)</span>
            </div>

            <ExternalLink size={18} />
          </a>

          <a
            href="https://www.youtube.com/@rise_infotech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-white/10 px-6 py-4 transition hover:bg-white hover:text-red-600"
          >
            <div className="flex items-center gap-4">
              <Youtube size={22} />
              <span className="font-semibold">YouTube</span>
            </div>

            <ExternalLink size={18} />
          </a>

        </div>

      </div>

    </div>

  </Container>
</section>

   
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