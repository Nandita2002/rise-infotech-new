'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

import Container from '@/components/ui/Container'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

export default function SapCoursesPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>

        {/* Hero */}
        <div className="mb-14 bg-[#0769B4] px-8 py-12 text-center text-white">

          <h1 className="text-4xl font-bold">
            SAP ERP Courses
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Learn industry-leading SAP Functional and Technical modules through
            live instructor-led classes, hands-on projects, certification guidance,
            and placement assistance.
          </p>

        </div>

        {/* Stats */}

        <div className="mb-14 grid gap-5 md:grid-cols-4">

          <div className="border border-slate-200 p-6 text-center">
            <h3 className="text-3xl font-bold text-[#0769B4]">
              {courses.length}
            </h3>

            <p className="mt-2 text-slate-600">
              SAP Courses
            </p>
          </div>

          <div className="border border-slate-200 p-6 text-center">
            <h3 className="text-3xl font-bold text-[#0769B4]">
              5000+
            </h3>

            <p className="mt-2 text-slate-600">
              Students Trained
            </p>
          </div>

          <div className="border border-slate-200 p-6 text-center">
            <h3 className="text-3xl font-bold text-[#0769B4]">
              Live
            </h3>

            <p className="mt-2 text-slate-600">
              Instructor Led
            </p>
          </div>

          <div className="border border-slate-200 p-6 text-center">
            <h3 className="text-3xl font-bold text-[#0769B4]">
              100%
            </h3>

            <p className="mt-2 text-slate-600">
              Placement Support
            </p>
          </div>

        </div>

        {/* Courses */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >

          {courses.map((course, index) => (

            <CourseCard
              key={course.id}
              item={{
                ...course,
                href: `/courses/${course.slug}`,
              }}
              index={index}
            />

          ))}

        </motion.div>

        {/* Trust Strip */}

        <div className="mx-auto mt-16 flex max-w-3xl items-center justify-center gap-3 border border-slate-200 bg-slate-50 px-6 py-5 text-center">

          <ShieldCheck
            size={18}
            className="text-[#0769B4]"
          />

          <p className="text-sm text-slate-600">
            Secure admissions • Industry-certified trainers • Placement assistance •
            Live instructor-led training
          </p>

        </div>

      </Container>
    </section>
  )
}
