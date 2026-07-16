'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Container from './Container'

interface PageHeroProps {
  badge?: string
  title: string
  description: string
  breadcrumbs?: {
    label: string
    href?: string
  }[]
}

export default function PageHero({
  badge,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-slate-100 blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">
              {breadcrumbs.map((item, index) => (
                <div key={item.label} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-blue-600">
                      {item.label}
                    </span>
                  )}

                  {index !== breadcrumbs.length - 1 && (
                    <ChevronRight size={16} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Badge */}
          {badge && (
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              {badge}
            </span>
          )}
        </motion.div>
      </Container>
    </section>
  )
}