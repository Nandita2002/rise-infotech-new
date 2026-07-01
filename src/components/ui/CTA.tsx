'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import Container from './Container'

interface CTAProps {
  badge?: string
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export default function CTA({
  badge = 'Start Your Journey',
  title,
  description,
  primaryButtonText = 'Explore Courses',
  primaryButtonHref = '/courses',
  secondaryButtonText = 'Book Free Consultation',
  secondaryButtonHref = '/contact',
}: CTAProps) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-8 py-16 text-white shadow-2xl lg:px-16"
        >
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
              {badge}
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {primaryButtonText}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <CalendarDays size={18} />
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}