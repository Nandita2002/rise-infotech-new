import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  CheckCircle2,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import { courses, getCourseBySlug, getRelatedCourses } from '@/data/courses'


// ── Static generation ───────────────────────────────────────
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourseBySlug(params.slug)
  if (!course) return {}

  return {
    title: `${course.title} Training | ${course.subtitle} Course | Rise Infotech`,
    description: course.description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} — ${course.subtitle}`,
      description: course.description,
      type: 'website',
    },
  }
}


export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug)
  if (!course) notFound()


  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Rise Infotech',
      sameAs: 'https://riseinfotech.example.com',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
     courseMode: "Online & Classroom",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
<section className="bg-white py-14">
  <Container>
    <div className="grid items-start gap-14 lg:grid-cols-[1fr_340px]">

      {/* ================= LEFT COLUMN ================= */}

      <div className="space-y-16">

        {/* Course Overview */}

        <section>

          <h2 className="mb-6 text-3xl font-bold text-[#0769B4]">
            What is {course.title}?
          </h2>

          <p className="leading-8 text-slate-600">
            {course.description}
          </p>

          <div className="mt-8">
            <Image
           src={course.overviewImage}
              alt={course.title}
              width={900}
              height={500}
              className="w-full border border-slate-200 object-cover"
            />
          </div>

        </section>

        {/* Who Can Learn */}

        <section>

          <h2 className="mb-8 text-3xl font-bold text-[#0769B4]">
            Who can learn?
          </h2>

          <div className="grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">

            {course.whoCanLearn.map((item) => (

              <div
                key={item}
                className="flex items-start gap-3"
              >

                <CheckCircle2
                  size={18}
                  className="mt-1 text-[#0769B4]"
                />

                <span className="leading-7 text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* What You Will Learn */}

        <section>

          <h2 className="mb-8 text-3xl font-bold text-[#0769B4]">
            What will you learn?
          </h2>

          <div className="grid gap-x-10 gap-y-4 lg:grid-cols-2">

            {course.whatYouWillLearn.map((item) => (

              <div
                key={item}
                className="flex items-start gap-3"
              >

                <CheckCircle2
                  size={18}
                  className="mt-1 text-[#0769B4]"
                />

                <span className="leading-7 text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </section>

      </div>

      {/* ================= RIGHT COLUMN ================= */}

      <aside className="sticky top-24">

        <div className="border border-slate-200 bg-white p-6 shadow-lg">

          <p className="mb-5 text-center text-sm font-semibold text-[#0769B4]">
            Admissions Open for Current Batch
          </p>

          {/* Replace with your existing enquiry form */}
          {/* <CourseEnquiryForm course={course.title} /> */}

        </div>

      </aside>

    </div>
  </Container>
</section>


    </>
  )
}