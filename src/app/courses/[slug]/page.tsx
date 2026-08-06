import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

import Container from "@/components/ui/Container"
import BrochureSidebar from "@/components/course/BrochureSidebar"

import {
  courses,
  getCourseBySlug,
} from "@/data/courses"

// ─────────────────────────────────────────────────────────────
// Static generation
// ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) return {}

  return {
    title: `${course.title} Training | ${course.subtitle} | Rise Infotech`,
    description: course.description,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} — ${course.subtitle}`,
      description: course.description,
      type: "website",
    },
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const course = getCourseBySlug(slug)

  if (!course) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Rise Infotech",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />



      {/* ================= Course Hero ================= */}
      <section className="relative overflow-hidden bg-[#03061a]">
        <div
          className="flex min-h-[140px] w-full items-center justify-center px-4 py-8 text-center sm:min-h-[160px] sm:px-10 sm:py-10 lg:px-16"
          style={{
            background:
              'linear-gradient(90deg, #7CC7F7 0%, #7CC7F7 12%, #3B9BE0 12%, #3B9BE0 28%, #1E7DC7 28%, #1E7DC7 45%, #0F5FAE 45%, #0F5FAE 62%, #0A4593 62%, #0A4593 80%, #03061a 80%, #03061a 100%)',
          }}
        >
          <div>
            <h1 className="text-xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
              {course.title}
            </h1>
            <p className="mt-2 text-sm font-semibold leading-snug text-blue-100 sm:text-lg">
              {course.subtitle}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white py-3 text-center">
          <p className="text-xs font-bold text-[#0769B4] sm:text-base">
            Admissions Open for August-26 Batch - Enroll Now!
          </p>
        </div>
      </section>
      <Container>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">

          {/* LEFT CONTENT */}
          <div className="space-y-16">

            {/* ================= Overview ================= */}

            <section>

              <h2 className="mb-6 text-3xl font-bold text-[#0769B4]">
                What is {course.title}?
              </h2>

              <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">

                <div>
                  <p className="leading-8 text-slate-600">
                    {course.description}
                  </p>
                </div>

                <Image
                  src={course.overviewImage}
                  alt={course.title}
                  width={450}
                  height={300}
                  className="w-full rounded-xl border border-slate-200 object-cover shadow-sm"
                />

              </div>

            </section>

            {/* ================= Who Can Learn ================= */}

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

            {/* ================= What You'll Learn ================= */}

            <section>

              <h2 className="mb-8 text-3xl font-bold text-[#0769B4]">
                What will you learn?
              </h2>

              <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">

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

            {/* Curriculum will come here */}

          </div>

          {/* RIGHT SIDEBAR */}

          <BrochureSidebar
            brochure={course.brochure}
            courseName={course.title}
          />

        </div>

      </Container>

    </>
  )
}