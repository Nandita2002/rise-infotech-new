'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  badge?: string
  features?: string[]
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

const colorVariants = {
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    border: 'hover:border-blue-200',
  },
  green: {
    icon: 'bg-emerald-50 text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
    border: 'hover:border-emerald-200',
  },
  purple: {
    icon: 'bg-purple-50 text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    border: 'hover:border-purple-200',
  },
  orange: {
    icon: 'bg-orange-50 text-orange-600',
    badge: 'bg-orange-100 text-orange-700',
    border: 'hover:border-orange-200',
  },
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  badge,
  features = [],
  color = 'blue',
}: FeatureCardProps) {
  const theme = colorVariants[color]

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl ${theme.border}`}
    >
      <div className={`mb-6 inline-flex rounded-2xl p-4 ${theme.icon}`}>
        <Icon size={28} />
      </div>

      {badge && (
        <span
          className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${theme.badge}`}
        >
          {badge}
        </span>
      )}

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="mt-6 space-y-2">
          {features.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
        >
          Learn More
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </motion.div>
  )
}