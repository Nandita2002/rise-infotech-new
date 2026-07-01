'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  buttonText?: string
  buttonHref?: string
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  buttonText,
  buttonHref,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-14 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 text-slate-600 sm:text-lg ${
            isCenter ? 'mx-auto max-w-3xl' : 'max-w-3xl'
          }`}
        >
          {description}
        </p>
      )}

      {buttonText && buttonHref && (
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
          >
            {buttonText}
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </motion.div>
  )
}