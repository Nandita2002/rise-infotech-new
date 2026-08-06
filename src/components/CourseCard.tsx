'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import type { Course } from '@/data/courses'

interface CourseCardProps {
  item: Course & {
    href: string
  }
  index?: number
}

export default function CourseCard({
  item,
  index = 0,
}: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      className="overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#0769B4] hover:shadow-xl"
    >
      {/* Course Image */}

      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={item.bannerImage}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-sm font-semibold text-[#0769B4]">
          {item.subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-4 line-clamp-4 leading-7 text-slate-600">
          {item.description}
        </p>

        <div className="mt-8">
          <Link
            href={item.href}
            className="inline-flex items-center justify-center bg-[#0769B4] px-6 py-3 font-semibold text-white transition hover:bg-[#055A99]"
          >
            View Course
          </Link>
        </div>

      </div>
    </motion.article>
  )
}