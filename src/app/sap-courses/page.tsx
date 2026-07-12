'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, Code2, LayoutGrid, ShieldCheck, Users2, Award, Headset } from 'lucide-react'
import Container from '@/components/ui/Container'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

type SubTab = 'all' | 'functional' | 'technical'

const functional = courses.filter((c) => c.category === 'functional').map((c) => ({ ...c, href: `/courses/${c.slug}` }))
const technical = courses.filter((c) => c.category === 'technical').map((c) => ({ ...c, href: `/courses/${c.slug}` }))
const all = [...functional, ...technical]

const subTabs: { key: SubTab; label: string; icon: React.ElementType; items: typeof all }[] = [
  { key: 'all', label: 'All SAP Courses', icon: LayoutGrid, items: all },
  { key: 'functional', label: 'Functional', icon: Settings, items: functional },
  { key: 'technical', label: 'Technical', icon: Code2, items: technical },
]

const stats = [
  { icon: LayoutGrid, label: `${all.length} SAP Modules`, sub: 'Functional & Technical' },
  { icon: Users2, label: '5000+ Trained', sub: 'Across all batches' },
  { icon: Award, label: 'Certified Trainers', sub: 'Real-world consultants' },
  { icon: Headset, label: 'Placement Support', sub: 'Resume to interview' },
]

export default function SapCoursesPage() {
  const [activeTab, setActiveTab] = useState<SubTab>('all')

  const visibleItems = useMemo(
    () => subTabs.find((t) => t.key === activeTab)?.items ?? all,
    [activeTab]
  )

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        {/* Hero */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            SAP Training
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            SAP ERP Courses
          </h1>
          <p className="text-base leading-relaxed text-slate-500">
            {all.length} SAP Functional and Technical modules taught through live instructor-led
            classes, real-time implementation projects, and placement support.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => {
            const StatIcon = s.icon
            return (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 text-center"
              >
                <StatIcon size={18} className="text-blue-600" />
                <p className="text-xs font-bold text-slate-800">{s.label}</p>
                <p className="text-[11px] text-slate-400">{s.sub}</p>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {subTabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <TabIcon size={15} />
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {tab.items.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visibleItems.map((item, i) => (
              <CourseCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust strip */}
        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-center">
          <ShieldCheck size={16} className="flex-shrink-0 text-blue-600" />
          <p className="text-xs text-slate-500">
            Secure UPI payments &middot; Manual verification within 24 hours &middot; Full refund if a batch is cancelled
          </p>
        </div>
      </Container>
    </section>
  )
}