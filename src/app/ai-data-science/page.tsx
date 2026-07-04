'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

const datascience = courses
  .filter((c) => c.category === 'datascience')
  .map((c) => ({ ...c, href: `/courses/${c.slug}` }))

export default function AiDataSciencePage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            AI &amp; Data Science
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            AI &amp; Data Science Courses
          </h1>
          <p className="text-base leading-relaxed text-slate-500">
            Build future-ready skills in Artificial Intelligence, Machine Learning, Data
            Science, Python and Business Analytics through practical, project-based learning.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {datascience.map((item, i) => (
            <CourseCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}