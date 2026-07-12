'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, BarChart3 } from 'lucide-react'
import BuyCourseModal from '@/components/BuyCourseModal'
import type { Course } from '@/data/courses'

// Full literal Tailwind class strings (Tailwind's scanner needs to see
// these exactly as written — no string concatenation) mapping each
// icon accent color used in data/courses.ts to a matching solid bar.
const accentBar: Record<string, string> = {
  'text-blue-600': 'bg-blue-600',
  'text-green-600': 'bg-green-600',
  'text-amber-600': 'bg-amber-500',
  'text-orange-600': 'bg-orange-500',
  'text-teal-600': 'bg-teal-500',
  'text-rose-600': 'bg-rose-500',
  'text-purple-600': 'bg-purple-600',
  'text-slate-600': 'bg-slate-500',
  'text-sky-600': 'bg-sky-500',
  'text-indigo-600': 'bg-indigo-600',
}

const levelText: Record<string, string> = {
  Beginner: 'text-green-600',
  Intermediate: 'text-blue-600',
  Advanced: 'text-purple-600',
}

const badgeDot: Record<string, string> = {
  'Most Popular': 'bg-blue-600',
  'High Demand': 'bg-amber-500',
  'New': 'bg-green-500',
}

interface CourseCardProps {
  item: Course & { href: string }
  index?: number
}

export default function CourseCard({ item, index = 0 }: CourseCardProps) {
  const Icon = item.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50"
    >
      {/* Signature accent stripe — ties each card to its module's color */}
      <div className={`h-[3px] w-full ${accentBar[item.iconColor] ?? 'bg-slate-400'}`} />

      <div className="flex-1 p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className={`${item.iconBg} rounded-xl p-2.5`}>
            <Icon size={20} className={item.iconColor} />
          </div>
          {item.badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">
              <span className={`h-1.5 w-1.5 rounded-full ${badgeDot[item.badge] ?? 'bg-slate-400'}`} />
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
          {item.title}
        </h3>
        <p className="mt-1 text-[13px] leading-tight text-slate-400">{item.subtitle}</p>

        {/* Stat strip */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-slate-100 rounded-xl border border-slate-100 bg-slate-50/70">
          <div className="flex flex-col items-center gap-1 py-3">
            <Clock size={13} className="text-slate-400" />
            <span className="text-[11px] font-semibold text-slate-600">{item.duration}</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-3">
            <Users size={13} className="text-slate-400" />
            <span className="text-[11px] font-semibold text-slate-600">{item.students}</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-3">
            <BarChart3 size={13} className="text-slate-400" />
            <span className={`text-[11px] font-semibold ${levelText[item.level]}`}>{item.level}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-6 py-4">
        <Link
          href={item.href}
          className="text-[13px] font-semibold text-slate-500 transition-colors hover:text-blue-600"
        >
          View curriculum
        </Link>
        <BuyCourseModal courseTitle={item.title} price={item.price} />
      </div>
    </motion.div>
  )
}