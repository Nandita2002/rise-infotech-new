'use client'

import Image from 'next/image'
import { ExternalLink, Linkedin } from 'lucide-react'

import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Instructor() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div className="relative">

            {/* Background Card */}

            <div className="relative overflow-hidden bg-[#0769B4] p-10 shadow-2xl">

              {/* Decorative Circles */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[#4FA7E3]/20 blur-3xl" />

              {/* Founder Image */}

              <div className="relative z-10 mx-auto h-72 w-72 overflow-hidden rounded-full border-[10px] border-white/20 bg-white shadow-2xl ring-4 ring-white/10">

                <Image
                  src="/founder.png"
                  alt="Mr. Kumaresh Bidari"
                  width={350}
                  height={350}
                  priority
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Founder Details */}

              <div className="relative z-10 mt-8 text-center">

                <h3 className="text-3xl font-bold text-white">
                  Mr. Kumaresh Bidari
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-100">
                  Founder & CEO
                </p>

                <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-white/40" />

                <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-blue-100">
                  Passionate educator and SAP industry expert dedicated to
                  building the next generation of skilled professionals through
                  practical, industry-oriented learning.
                </p>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div>

            <SectionHeading
              badge="Meet Our Founder"
              title="A Vision to Build Industry-Ready Professionals"
              align="left"
            />

            <blockquote className="mt-6 border-l-4 border-[#0769B4] pl-6 text-lg italic leading-9 text-slate-600">
              "At Rise Infotech, our vision has always been to bridge the gap
              between academic learning and industry expectations by providing
              practical education that transforms learners into confident
              professionals."
            </blockquote>

            <p className="mt-8 leading-8 text-slate-600">
              With years of hands-on industry experience, Mr. Kumaresh Bidari
              has mentored thousands of students and professionals in SAP ERP,
              Corporate Training, Data Science and Business Analytics.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              His mission is simple — provide learners with practical skills,
              real-world exposure and continuous mentorship so they can thrive
              in today's competitive technology landscape.
            </p>

                        {/* Experience Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-4xl font-extrabold text-[#0769B4]">
                  15+
                </h4>

                <p className="mt-2 font-semibold text-slate-900">
                  Years of Experience
                </p>

                <span className="text-sm text-slate-500">
                  Industry • Consulting • Training
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-4xl font-extrabold text-[#0769B4]">
                  5000+
                </h4>

                <p className="mt-2 font-semibold text-slate-900">
                  Students Mentored
                </p>

                <span className="text-sm text-slate-500">
                  Across SAP & Corporate Training
                </span>
              </div>

            </div>

            {/* Expertise */}

            <div className="mt-10">

              <h4 className="mb-4 text-lg font-bold text-slate-900">
                Areas of Expertise
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  'SAP ERP',
                  'Corporate Training',
                  'Data Science',
                  'Business Analytics',
                  'Industry Consulting',
                  'Career Mentoring',
                  'Placement Assistance',
                  'Live Projects',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#EAF5FD] px-4 py-2 text-sm font-medium text-[#0769B4] transition-all duration-300 hover:bg-[#0769B4] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://kumareshbidari.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                View Portfolio
                <ExternalLink size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/kumaresh-bidari074/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-[#0769B4]"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}