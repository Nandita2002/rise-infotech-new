'use client'

import Container from "./Container"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isLeft = align === 'left'

  return (
   <section className="bg-slate-50 py-14 lg:py-16">

  {/* Full Width Blue Header */}
  <div className="bg-[#0769B4] py-10 shadow-lg">

    <Container>

      <div className={isLeft ? "text-left" : "text-center"}>

        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Why Choose Us
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white">
          Why Students Choose Rise Infotech
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
          Our training approach combines industry expertise, practical
          learning and career support to help every learner become
          job-ready.
        </p>

      </div>

    </Container>

  </div>

  {/* Cards */}
  <Container>

    <div className="mt-10 grid gap-6 md:grid-cols-2">

      {/* Cards Here */}

    </div>

  </Container>

</section>
  )
}