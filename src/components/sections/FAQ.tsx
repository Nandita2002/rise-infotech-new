'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const faqs = [
  { q: 'Do I need prior SAP knowledge to enroll?', a: 'No prior SAP experience is required. Our courses are designed for both beginners and working professionals looking to upskill.' },
  { q: 'Are the classes online or offline?', a: 'We offer both online instructor-led and offline classroom training at our Bangalore center. Weekend and weekday batches are available.' },
  { q: 'Will I get a certificate after completing the course?', a: 'Yes, you will receive a Rise Infotech course completion certificate. We also provide guidance for the official SAP certification exam.' },
  { q: 'What is the placement support provided?', a: 'We offer 100% placement assistance including resume building, mock interviews, and direct referrals to our hiring partners.' },
  { q: 'How long are the SAP courses?', a: 'Course duration varies by module — typically 6 to 12 weeks depending on the SAP track you choose.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
          <div className="mb-16  bg-[#123498] px-8 py-14 text-center shadow-lg">

  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
    GOT QUESTIONS?
  </span>

  <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
    Frequently Asked Questions
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
    Find answers to the most commonly asked questions about our SAP courses,
    training methodology, certifications, placements, and enrollment process.
  </p>

</div>
      <Container className="max-w-3xl">

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={cn('flex-shrink-0 text-slate-400 transition-transform duration-200', open === i ? 'rotate-180' : '')}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
