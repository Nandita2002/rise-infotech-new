'use client'

import { useState } from 'react'
import { TestimonialStudentData } from '@/data/testimonial'

function getInitials(name: string) {
  return name.trim().slice(0, 2).toUpperCase()
}

interface TestimonialCardProps {
  item: (typeof TestimonialStudentData)[number]
}

function TestimonialCard({ item }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false)

  const maxLength = 180
  const isLong = item.text.length > maxLength
  const displayText = expanded || !isLong ? item.text : item.text.slice(0, maxLength).trim() + '…'

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
      {/* Header: avatar + name + role/company */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700">
          {getInitials(item.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-slate-900">{item.name}</p>
          <p className="truncate text-xs text-slate-500">
            {item.role ? `${item.role} · ` : ''}
            {item.company}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">{displayText}</p>

      {/* Read more toggle */}
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 self-start text-sm font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

export default function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TestimonialStudentData.map((item) => (
        <TestimonialCard key={item.id} item={item} />
      ))}
    </div>
  )
}