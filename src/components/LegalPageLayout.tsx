import Link from 'next/link'
import Container from '@/components/ui/Container'

export interface LegalSection {
  id: string
  title: string
  body: React.ReactNode
}

export default function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: React.ReactNode
  sections: LegalSection[]
}) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <nav className="mb-6 text-xs text-slate-400">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-slate-500">{title}</span>
        </nav>

        <div className="mx-auto mb-12 max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            {eyebrow}
          </span>
          <h1 className="mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h1>
          <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>
          <div className="mt-5 text-[15px] leading-relaxed text-slate-500">{intro}</div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* On-page nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                On this page
              </p>
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-1.5 text-[13px] text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {String(i + 1).padStart(2, '0')}. {s.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Sections */}
          <div className="max-w-2xl space-y-10">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="mb-3 flex items-baseline gap-2.5 text-lg font-bold text-slate-900">
                  <span className="text-sm font-bold text-blue-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.title}
                </h2>
                <div className="space-y-3 text-[14.5px] leading-relaxed text-slate-500">
                  {s.body}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-[13px] text-slate-500">
              Questions about this {title.toLowerCase()}? Reach us at{' '}
              <a href="mailto:info@riseinfotech.in" className="font-semibold text-blue-600">
                info@riseinfotech.in
              </a>
              .
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}