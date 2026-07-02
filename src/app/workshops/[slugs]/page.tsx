import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Users, BarChart3, CheckCircle2, ArrowRight, GraduationCap, Gift, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import CurriculumAccordion from '@/components/CurriculumAccordion'
import { workshops, getWorkshopBySlug } from '@/data/workshop'

export function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const workshop = getWorkshopBySlug(params.slug)
  if (!workshop) return {}

  return {
    title: `${workshop.title} Workshop | ${workshop.subtitle} | Rise Infotech`,
    description: workshop.summary,
    alternates: { canonical: `/workshops/${workshop.slug}` },
    openGraph: {
      title: `${workshop.title} — ${workshop.subtitle}`,
      description: workshop.summary,
      type: 'website',
    },
  }
}

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700',
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-purple-50 text-purple-700',
}

export default function WorkshopDetailPage({ params }: { params: { slug: string } }) {
  const workshop = getWorkshopBySlug(params.slug)
  if (!workshop) notFound()

  const Icon = workshop.icon

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: workshop.title,
    description: workshop.summary,
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'Rise Infotech' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white border-b border-slate-100 pt-10 pb-12 lg:pt-16 lg:pb-16">
        <Container>
          <nav className="text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/#courses" className="hover:text-blue-600">Workshops</Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-500">{workshop.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${workshop.iconBg} rounded-xl p-3`}>
                  <Icon size={24} className={workshop.iconColor} />
                </div>
                {workshop.badge && (
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-600 text-white">
                    {workshop.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                {workshop.title}
              </h1>
              <p className="text-lg text-slate-500 mb-5">{workshop.subtitle}</p>
              <p className="text-slate-600 leading-relaxed max-w-2xl mb-6">{workshop.summary}</p>

              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Clock size={15} className="text-blue-500" /> {workshop.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Users size={15} className="text-blue-500" /> {workshop.students} attended
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <BarChart3 size={15} className="text-blue-500" />
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[workshop.level]}`}>
                    {workshop.level}
                  </span>
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 p-6 lg:sticky lg:top-24">
              <p className="text-sm text-slate-500 mb-1">Limited seats</p>
              <p className="text-slate-900 font-bold text-lg mb-4">Reserve your spot</p>
              <div className="space-y-2.5 mb-5">
                {workshop.takeaways.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" /> {t}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm mb-3"
              >
                Register Now <ArrowRight size={15} />
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

      <section className="py-12 lg:py-16 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">About This Workshop</h2>
                <p className="text-slate-600 leading-relaxed">{workshop.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">What You'll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {workshop.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 bg-white border border-slate-100 rounded-xl p-4">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Agenda</h2>
                <CurriculumAccordion items={workshop.agenda} />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white border border-slate-100 rounded-2xl p-5">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <GraduationCap size={16} className="text-blue-500" /> Who Should Attend
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{workshop.eligibility}</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <Gift size={16} className="text-blue-500" /> You'll Walk Away With
                </h3>
                <ul className="space-y-2">
                  {workshop.takeaways.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-500">
                      <CheckCircle2 size={13} className="text-blue-500 mt-0.5 flex-shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}