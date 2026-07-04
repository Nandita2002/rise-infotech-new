'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import CourseCard from '@/components/CourseCard'
import { workshops } from '@/data/workshop'

const items = workshops.map((w) => ({ ...w, href: `/workshops/${w.slug}` }))

export default function WorkshopsPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            Workshops &amp; Bootcamps
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Workshops &amp; Bootcamps
          </h1>
          <p className="text-base leading-relaxed text-slate-500">
            Career-focused workshops, bootcamps, hackathons and industry sessions designed
            to improve practical skills and employability.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, i) => (
            <CourseCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}