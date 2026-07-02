'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Settings, Code2, BrainCircuit, FlaskConical, BookOpen } from 'lucide-react'
import Container from '@/components/ui/Container'
import { courses as allCourses, type Course } from '@/data/courses'
import { workshops, type Workshop } from '@/data/workshop'

type Tab = 'functional' | 'technical' | 'datascience' | 'workshops'
type CardItem = (Course & { href: string }) | (Workshop & { href: string })

const grouped: Record<Tab, CardItem[]> = {
  functional: allCourses.filter((c) => c.category === 'functional').map((c) => ({ ...c, href: `/courses/${c.slug}` })),
  technical: allCourses.filter((c) => c.category === 'technical').map((c) => ({ ...c, href: `/courses/${c.slug}` })),
  datascience: allCourses.filter((c) => c.category === 'datascience').map((c) => ({ ...c, href: `/courses/${c.slug}` })),
  workshops: workshops.map((w) => ({ ...w, href: `/workshops/${w.slug}` })),
}

// ── Tab config ───────────────────────────────────────────────
const tabs: { key: Tab; label: string; icon: React.ElementType; count: number }[] = [
  { key: 'functional', label: 'SAP Functional', icon: Settings, count: grouped.functional.length },
  { key: 'technical', label: 'SAP Technical', icon: Code2, count: grouped.technical.length },
  { key: 'datascience', label: 'Data Science', icon: BrainCircuit, count: grouped.datascience.length },
  { key: 'workshops', label: 'Workshops', icon: FlaskConical, count: grouped.workshops.length },
]

// ── Level badge ──────────────────────────────────────────────
const levelColor: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700',
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-purple-50 text-purple-700',
}

const badgeColor: Record<string, string> = {
  'Most Popular': 'bg-blue-600 text-white',
  'High Demand': 'bg-amber-500 text-white',
  'New': 'bg-green-500 text-white',
  'Weekend Batch': 'bg-purple-600 text-white',
  'High Success Rate': 'bg-teal-600 text-white',
  'Free': 'bg-rose-500 text-white',
}

// ── Course card ──────────────────────────────────────────────
function CourseCard({ item }: { item: CardItem }) {
  const Icon = item.icon
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
    >
      {item.badge && (
        <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor[item.badge] ?? 'bg-slate-100 text-slate-600'}`}>
          {item.badge}
        </span>
      )}

      <div className="p-5 flex-1">
        <div className="flex items-start gap-3 mb-3">
          <div className={`${item.iconBg} rounded-xl p-2.5 flex-shrink-0`}>
            <Icon size={20} className={item.iconColor} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-[12px] mt-0.5 leading-tight">{item.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap mt-4">
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <Clock size={11} /> {item.duration}
          </span>
          <span className="text-slate-200">•</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <Users size={11} /> {item.students}
          </span>
          <span className="text-slate-200">•</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${levelColor[item.level]}`}>
            {item.level}
          </span>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-slate-50 flex items-center justify-between">
        <Link
          href={item.href}
          className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/link"
        >
          View Details
          <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
        </Link>
        <Link
          href="/contact"
          className="text-[11px] font-semibold bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white px-3 py-1 rounded-lg transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────────────────────
export default function Courses() {
  const [activeTab, setActiveTab] = useState<Tab>('functional')

  return (
    <section id="courses" className="py-16 lg:py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Explore Our Courses
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Industry-aligned SAP, Data Science, and professional development programmes
            taught by certified consultants with real-world experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <TabIcon size={15} />
                {tab.label}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {grouped[activeTab].map((item) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Can't find what you're looking for? We offer custom corporate batches too.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <BookOpen size={15} />
              View All Courses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-blue-200 hover:border-blue-400 text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl transition-all bg-white hover:bg-blue-50"
            >
              Talk to a Counsellor
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}