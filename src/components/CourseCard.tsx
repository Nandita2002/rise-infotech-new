'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Users } from 'lucide-react'
import type { Course } from '@/data/courses'
import type { Workshop } from '@/data/workshop'

export type CardItem = (Course & { href: string }) | (Workshop & { href: string })

// Level differentiated with blue tints only — no green/purple.
const levelColor: Record<string, string> = {
  Beginner: 'bg-blue-50 text-blue-600',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-blue-600 text-white',
}

// Corner badges — all brand blue, differentiated by weight/tint rather than hue.
const badgeColor: Record<string, string> = {
  'Most Popular': 'bg-blue-600 text-white',
  'High Demand': 'bg-blue-700 text-white',
  New: 'bg-blue-500 text-white',
  'Weekend Batch': 'bg-blue-800 text-white',
  'High Success Rate': 'bg-blue-600 text-white',
  Free: 'bg-blue-900 text-white',
}

export default function CourseCard({ item, index = 0 }: { item: CardItem; index?: number }) {
  const Icon = item.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:border-blue-500 hover:shadow-[0_16px_32px_rgba(37,99,235,0.14)]"
    >
      {item.badge && (
        <span
          className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
            badgeColor[item.badge] ?? 'bg-blue-600 text-white'
          }`}
        >
          {item.badge}
        </span>
      )}

      <div className="flex-1 p-5">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex-shrink-0 rounded-xl bg-blue-50 p-2.5 transition-colors duration-300 group-hover:bg-blue-600">
            <Icon size={20} className="text-blue-600 transition-colors duration-300 group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold leading-tight text-slate-800 transition-colors group-hover:text-blue-600">
              {item.title}
            </h3>
            <p className="mt-0.5 text-[12px] leading-tight text-slate-400">{item.subtitle}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <Clock size={11} /> {item.duration}
          </span>
          <span className="text-slate-200">•</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <Users size={11} /> {item.students}
          </span>
          <span className="text-slate-200">•</span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelColor[item.level]}`}>
            {item.level}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-50 px-5 py-3">
        <Link
          href={item.href}
          className="group/link inline-flex items-center gap-1 text-[12px] font-semibold text-blue-600 hover:text-blue-700"
        >
          View Details
          <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
        </Link>
        <Link
          href="/contact"
          className="rounded-lg bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  )
}