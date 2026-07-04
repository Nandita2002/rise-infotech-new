'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Database,
  BrainCircuit,
  FlaskConical,
} from 'lucide-react'
import Container from '@/components/ui/Container'

// ── Program data ─────────────────────────────────────────────
type Program = {
  id: string
  icon: React.ElementType
  title: string
  description: string
  highlights: string[]
  ctaLabel: string
  href: string
}

const programs: Program[] = [
  {
    id: 'sap',
    icon: Database,
    title: 'SAP ERP Courses',
    description:
      'Master industry-leading SAP ERP modules through instructor-led training, real-time implementation projects, certification guidance and placement support.',
    highlights: [
      '19+ SAP Modules',
      'Live Instructor-Led Classes',
      'Real-Time Projects',
      'Placement Assistance',
    ],
    ctaLabel: 'Explore SAP Courses',
    href: '/sap-courses',
  },
  {
    id: 'datascience',
    icon: BrainCircuit,
    title: 'AI & Data Science',
    description:
      'Build future-ready skills in Artificial Intelligence, Machine Learning, Data Science, Python and Business Analytics through practical learning.',
    highlights: [
      'Artificial Intelligence',
      'Machine Learning',
      'Python Programming',
      'Business Analytics',
    ],
    ctaLabel: 'Explore AI Courses',
    href: '/ai-data-science',
  },
  {
    id: 'workshops',
    icon: FlaskConical,
    title: 'Workshops & Bootcamps',
    description:
      'Participate in career-focused workshops, bootcamps, hackathons and industry sessions designed to improve practical skills and employability.',
    highlights: [
      'Weekend Workshops',
      'Career Bootcamps',
      'Resume Building',
      'Interview Preparation',
    ],
    ctaLabel: 'Explore Workshops',
    href: '/workshops&bootcamps',
  },
]

// ── Program card ─────────────────────────────────────────────
function ProgramCard({ program, index }: { program: Program; index: number }) {
  const Icon = program.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full min-h-[460px] flex-col rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_2px_10px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.14)]"
    >
      {/* Icon block — top ~35-40% */}
      <div className="mb-6 flex h-36 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600/[0.06]">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 transition-transform duration-300 group-hover:scale-105">
          <Icon size={36} className="text-white" strokeWidth={1.75} />
        </div>
      </div>

      {/* Heading */}
      <h3 className="mb-3 text-xl font-extrabold text-slate-900">
        {program.title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-slate-500">
        {program.description}
      </p>

      {/* Highlights */}
      <ul className="mb-8 space-y-2.5">
        {program.highlights.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700">
            <CheckCircle2 size={17} className="flex-shrink-0 text-blue-600" strokeWidth={2} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* CTA — pinned to bottom */}
      <div className="mt-auto pt-2">
        <Link
          href={program.href}
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors group-hover:text-blue-700"
        >
          {program.ctaLabel}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────────────────────
export default function Courses() {
  return (
    <section id="courses" className="bg-white py-16 lg:py-24">
<div className="mb-10 bg-blue-500 px-8 py-10 text-center shadow-xl lg:px-16">

  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
    WHAT WE OFFER
  </span>

  <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
    Explore Our Learning Programs
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50">
    Choose from industry-focused training programs designed to help students
    and professionals build successful careers.
  </p>

</div>
      <Container>
      
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}