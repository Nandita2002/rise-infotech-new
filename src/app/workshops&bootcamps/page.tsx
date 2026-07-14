'use client'

import { motion } from 'framer-motion'

import Container from '@/components/ui/Container'
import WorkshopCard from '@/components/WorkshopCard'
import { workshops } from '@/data/workshop'

const workshopItems = workshops.map((workshop) => ({
  ...workshop,
  href: `/workshops/${workshop.slug}`,
}))

export default function WorkshopsPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>

        {/* Hero */}

        <div className="mb-14 bg-[#0769B4] px-8 py-12 text-center text-white">

          <h1 className="text-4xl font-bold">
            Workshops & Bootcamps
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Participate in career-focused workshops, bootcamps, hackathons and
            industry sessions designed to build practical skills, confidence,
            and employability.
          </p>

        </div>

        {/* Workshop Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {workshopItems.map((item, index) => (
            <WorkshopCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </motion.div>

      </Container>
    </section>
  )
}