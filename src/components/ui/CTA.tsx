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
         className="relative overflow-hidden bg-[#0769B4] px-8 py-16 text-white shadow-2xl lg:px-16">
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

  {/* Primary Button */}
  <Link
    href={primaryButtonHref}
    className="inline-flex items-center gap-2 bg-white px-7 py-3.5 text-base font-semibold text-[#0769B4] shadow-lg transition-all duration-300 hover:bg-slate-100 hover:text-[#055A99]"
  >
    {primaryButtonText}
    <ArrowRight size={18} />
  </Link>

  {/* Secondary Button */}
  <Link
    href={secondaryButtonHref}
    className="inline-flex items-center gap-2 border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0769B4]"
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