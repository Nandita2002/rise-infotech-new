'use client'

import { TestimonialStudentData } from '@/data/testimonial'

// ── Helpers ───────────────────────────────────────────────────
function getInitials(name: string) {
  return name.trim().slice(0, 2).toUpperCase()
}

// Pulls a short punchy headline out of the full quote (first sentence,
// capped in length) and returns the remainder as the supporting body text.
function splitQuote(text: string) {
  const firstSentenceMatch = text.match(/^.{0,90}?[.!?](\s|$)/)
  let headline = firstSentenceMatch ? firstSentenceMatch[0].trim() : text.slice(0, 70).trim() + '…'

  // guard against a too-short/too-long headline
  if (headline.length > 100) {
    headline = headline.slice(0, 90).trim() + '…'
  }

  const body = text.slice(headline.length).trim()
  return { headline, body }
}

type Variant = 'blue' | 'white'

// Repeating pattern that mimics the reference wall: an accent card up front,
// mostly-white cards carrying the bulk of the grid, dark cards sprinkled in.
const variantPattern: Variant[] = ['blue', 'white', 'white', 'blue', 'white', 'blue']

function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M0 20.6C0 13.7 2.1 8 6.4 3.5 10.6-1 15.9-3 22.4-2.4l-.9 6.7c-4 .2-7.1 1.4-9.3 3.6-2.2 2.1-3.4 4.8-3.6 8h9.9v14.6H0V20.6zm22.4 0c0-6.9 2.1-12.6 6.4-17.1C33 -1 38.3-3 44.8-2.4l-.9 6.7c-4 .2-7.1 1.4-9.3 3.6-2.2 2.1-3.4 4.8-3.6 8h9.9v14.6H22.4V20.6z" />
    </svg>
  )
}

interface TestimonialCardProps {
  item: (typeof TestimonialStudentData)[number]
  variant: Variant
  featured?: boolean
}

function TestimonialCard({ item, variant, featured = false }: TestimonialCardProps) {
  const { headline, body } = splitQuote(item.text)

  const styles: Record<Variant, { card: string; name: string; meta: string; headline: string; body: string; avatarBg: string; avatarText: string; quote: string }> = {
    blue: {
      card: 'bg-[#0769B4] border border-[#0769B4]',
      name: 'text-white',
      meta: 'text-blue-100',
      headline: 'text-white',
      body: 'text-blue-50/90',
      avatarBg: 'bg-white/15',
      avatarText: 'text-white',
      quote: 'text-white/15',
    },

    white: {
      card: 'bg-white border border-slate-200',
      name: 'text-slate-900',
      meta: 'text-slate-500',
      headline: 'text-slate-900',
      body: 'text-slate-600',
      avatarBg: 'bg-blue-50',
      avatarText: 'text-[#0769B4]',
      quote: 'text-slate-100',
    },
  }

  const s = styles[variant]

  return (
    <div
      className={`relative mb-6 break-inside-avoid overflow-hidden rounded-3xl p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${s.card}`}
    >
      {/* Decorative quote mark */}
      <QuoteMark className={`absolute -top-1 right-4 h-16 w-20 sm:h-20 sm:w-24 ${s.quote}`} />

      {/* Header: avatar + name + role */}
      <div className="relative flex items-center gap-3">
        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${s.avatarBg} ${s.avatarText}`}>
          {getInitials(item.name)}
        </div>
        <div className="min-w-0">
          <p className={`truncate text-[15px] font-semibold ${s.name}`}>{item.name}</p>
          <p className={`truncate text-xs ${s.meta}`}>
            {item.role ? `${item.role} · ` : ''}
            {item.company}
          </p>
        </div>
      </div>

      {/* Headline quote */}
      <p className={`relative mt-5 text-lg sm:text-xl font-bold leading-snug ${s.headline}`}>
        {headline}
      </p>

      {/* Body */}
      {body && (
        <p className={`relative mt-3 text-sm leading-relaxed line-clamp-6 ${s.body}`}>
          {body}
        </p>
      )}
    </div>
  )
}

// ── Grid ─────────────────────────────────────────────────────
export default function TestimonialsGrid() {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      {TestimonialStudentData.map((item, i) => (
        <TestimonialCard
          key={item.id}
          item={item}
          variant={variantPattern[i % variantPattern.length]}
        />
      ))}
    </div>
  )
}