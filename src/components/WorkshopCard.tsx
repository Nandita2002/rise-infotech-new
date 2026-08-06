'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Clock,
  Users,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

import type { Workshop } from '@/data/workshop'

interface WorkshopCardProps {
  item: Workshop & {
    href: string
  }
  index?: number
}

const levelColor = {
  Beginner: 'text-green-600',
  Intermediate: 'text-blue-600',
  Advanced: 'text-purple-600',
}

export default function WorkshopCard({
  item,
  index = 0,
}: WorkshopCardProps) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      className="overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:border-[#0769B4] hover:shadow-xl"
    >
      {/* Header */}

      <div className="bg-[#0769B4] p-8 text-white">

        <div
          className={`${item.iconBg} flex h-16 w-16 items-center justify-center`}
        >
          <Icon
            size={30}
            className={item.iconColor}
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {item.title}
        </h3>

        <p className="mt-2 text-blue-100">
          {item.subtitle}
        </p>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="grid grid-cols-3 border border-slate-200">

          <div className="flex flex-col items-center gap-2 border-r border-slate-200 py-4">

            <Clock
              size={18}
              className="text-[#0769B4]"
            />

            <span className="text-xs font-semibold">
              {item.duration}
            </span>

          </div>

          <div className="flex flex-col items-center gap-2 border-r border-slate-200 py-4">

            <Users
              size={18}
              className="text-[#0769B4]"
            />

            <span className="text-xs font-semibold">
              {item.students}
            </span>

          </div>

          <div className="flex flex-col items-center gap-2 py-4">

            <BarChart3
              size={18}
              className="text-[#0769B4]"
            />

            <span
              className={`text-xs font-semibold ${levelColor[item.level]}`}
            >
              {item.level}
            </span>

          </div>

        </div>

        {item.badge && (

          <div className="mt-5">

            <span className="bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0769B4]">
              {item.badge}
            </span>

          </div>

        )}

        <p className="mt-5 line-clamp-4 leading-7 text-slate-600">
          {item.summary}
        </p>

        <Link
          href={item.href}
          className="mt-8 inline-flex items-center gap-2 bg-[#0769B4] px-6 py-3 font-semibold text-white transition hover:bg-[#055A99]"
        >
          View Workshop

          <ArrowRight size={18} />

        </Link>

      </div>

    </motion.article>
  )
}