'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

interface StatItem {
  value: number
  suffix?: string
  label: string
  description?: string
}

interface StatsProps {
  stats: StatItem[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
          >
            <h3 className="text-3xl font-extrabold text-blue-600 lg:text-5xl">
              <CountUp
                end={stat.value}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
              {stat.suffix}
            </h3>

            <p className="mt-3 text-lg font-semibold text-slate-900">
              {stat.label}
            </p>

            {stat.description && (
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {stat.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}