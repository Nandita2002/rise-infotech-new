import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Clock,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Wrench,
  Phone,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import CurriculumAccordion from '@/components/CurriculumAccordion'
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
    description: course.summary,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} — ${course.subtitle}`,
      description: course.summary,
      type: 'website',
    },
  }
}

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700',
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-purple-50 text-purple-700',
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug)
  if (!course) notFound()

  const Icon = course.icon
  const related = getRelatedCourses(course)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.summary,
    provider: {
      '@type': 'Organization',
      name: 'Rise Infotech',
      sameAs: 'https://riseinfotech.example.com',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: course.duration,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 pt-10 pb-12 lg:pt-16 lg:pb-16">
        <Container>
          <nav className="text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/courses" className="hover:text-blue-600">Courses</Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-500">{course.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${course.iconBg} rounded-xl p-3`}>
                  <Icon size={24} className={course.iconColor} />
                </div>
                {course.badge && (
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                {course.title}
              </h1>
              <p className="text-lg text-slate-500 mb-5">{course.subtitle}</p>
              <p className="text-slate-600 leading-relaxed max-w-2xl mb-6">{course.summary}</p>

              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Clock size={15} className="text-blue-500" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Users size={15} className="text-blue-500" /> {course.students} trained
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <BarChart3 size={15} className="text-blue-500" />
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                </span>
              </div>
            </div>

            {/* Enroll card */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 p-6 lg:sticky lg:top-24">
              <p className="text-sm text-slate-500 mb-1">Batch starts soon</p>
              <p className="text-slate-900 font-bold text-lg mb-4">Reserve your seat</p>
              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" /> Live instructor-led sessions
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" /> Hands-on system access
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" /> Certificate of completion
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" /> Placement assistance
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm mb-3"
              >
                Enroll Now <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+910000000000"
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <Phone size={15} /> Talk to a Counsellor
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Body ─────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            <div className="space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Course Overview</h2>
                <p className="text-slate-600 leading-relaxed">{course.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">What You'll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 bg-white border border-slate-100 rounded-xl p-4">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Curriculum</h2>
                <CurriculumAccordion items={course.curriculum} />
              </div>

              {/* Career roles */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Career Opportunities</h2>
                <div className="flex flex-wrap gap-2.5">
                  {course.careerRoles.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl"
                    >
                      <Briefcase size={13} /> {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white border border-slate-100 rounded-2xl p-5">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <GraduationCap size={16} className="text-blue-500" /> Eligibility
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{course.eligibility}</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <Wrench size={16} className="text-blue-500" /> Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span key={tool} className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {related.length > 0 && (
                <div className="bg-white border border-slate-100 rounded-2xl p-5">
                  <h3 className="font-bold text-slate-800 text-sm mb-3">Related Courses</h3>
                  <div className="space-y-2">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/courses/${r.slug}`}
                        className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50 last:border-0 group"
                      >
                        {r.title}
                        <ArrowRight size={13} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}