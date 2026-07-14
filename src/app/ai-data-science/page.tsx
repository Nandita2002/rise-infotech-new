'use client'

import { motion } from 'framer-motion'

import Container from '@/components/ui/Container'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

const aiCourses = courses
  .filter(
    (course) =>
      course.slug.includes('ai') ||
      course.slug.includes('data') ||
      course.slug.includes('python')
  )
  .map((course) => ({
    ...course,
    href: `/courses/${course.slug}`,
  }))

export default function AiDataSciencePage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>

        {/* Hero */}

        <div className="mb-14 bg-[#0769B4] px-8 py-12 text-center text-white">

          <h1 className="text-4xl font-bold">
            AI & Data Science Courses
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Build future-ready skills in Artificial Intelligence, Machine
            Learning, Data Science, Python, Business Analytics and emerging
            technologies through practical, project-based learning.
          </p>

        </div>

        {/* Courses */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {aiCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              item={course}
              index={index}
            />
          ))}
        </motion.div>

      </Container>
    </section>
  )
}