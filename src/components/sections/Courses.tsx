'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import Container from '@/components/ui/Container'

/* ────────────────────────────────────────────────
   Program Data
──────────────────────────────────────────────── */

type Program = {
  id: string
  image: string
  title: string
  description: string
  ctaLabel: string
  href: string
}

const programs: Program[] = [
  {
    id: 'sap',

    image: '/saperp.png',

    title: 'SAP ERP Courses',

    description:
      'Master industry-leading SAP ERP modules through instructor-led training, real-time implementation projects, certification guidance and placement support.',


    ctaLabel: 'Explore SAP Courses',

    href: '/sap-courses',
  },

  {
    id: 'datascience',

    image: '/datascience.png',

    title: 'AI & Data Science',

    description:
      'Build future-ready skills in Artificial Intelligence, Machine Learning, AI Powered Data Analytics and Azure Data Engineering through practical learning.',



    ctaLabel: 'Explore AI Courses',

    href: '/ai-data-science',
  },

  {
    id: 'workshops',

    image: '/workshops.png',

    title: 'Workshops & Bootcamps',

    description:
      'Participate in career-focused workshops, bootcamps, hackathons and industry sessions designed to improve practical skills and employability.',


    ctaLabel: 'Explore Workshops',

    href: '/workshops&bootcamps',
  },
]
/* ────────────────────────────────────────────────
   Program Card
──────────────────────────────────────────────── */

function ProgramCard({
  program,
  index,
}: {
  program: Program
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group flex h-full min-h-[620px] flex-col border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#123498] hover:shadow-xl"
    >
      {/* ================= IMAGE ================= */}

      <div className="overflow-hidden border-b border-slate-100">

        <Image
          src={program.image}
          alt={program.title}
          width={600}
          height={420}
          priority={index === 0}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="flex flex-1 flex-col p-6">

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          {program.title}
        </h3>

        <p className="mb-6 leading-8 text-slate-600">
          {program.description}
        </p>

        {/* CTA */}

        <div className="mt-auto">

          <Link
            href={program.href}
            className="inline-flex items-center gap-2 font-semibold text-[#123498] transition-all duration-300 hover:gap-3"
          >
            {program.ctaLabel}

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </motion.div>
  )
}
export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-white py-16 lg:py-24"
    >
      {/* ================= Heading ================= */}

      <div className="mb-12 bg-[#123498] px-8 py-10 text-center shadow-xl lg:px-16">

        <span className="inline-flex items-center border border-white/30 bg-white/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
          WHAT WE OFFER
        </span>

        <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
          Explore Our Learning Programs
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Choose from industry-focused training programs designed to help
          students and professionals build successful careers through practical,
          instructor-led learning.
        </p>

      </div>

      {/* ================= Cards ================= */}

      <Container>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
            />
          ))}

        </div>

      </Container>
    </section>
  )
}