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
      <Container className="max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>
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
