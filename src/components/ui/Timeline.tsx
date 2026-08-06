'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface TimelineItem {
  icon: LucideIcon
  title: string
  description: string
}

interface TimelineProps {
  title?: string
  subtitle?: string
  items: TimelineItem[]
}

export default function Timeline({
  title,
  subtitle,
  items,
}: TimelineProps) {
  return (
    <section className="py-16 lg:py-24">
      {(title || subtitle) && (
        <div className="mb-14 text-center">
          {subtitle && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              {subtitle}
            </p>
          )}

          {title && (
            <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>

              {index !== items.length - 1 && (
                <div className="absolute left-full top-1/2 hidden -translate-y-1/2 xl:flex w-10 justify-center text-blue-300">
                  <ArrowRight size={26} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}