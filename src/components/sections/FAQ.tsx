'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: "Do I need prior technical knowledge to enroll?",
    a: "No. Our programs are designed for beginners, fresh graduates, and working professionals. Course prerequisites vary depending on the program, and our counselors will help you choose the right learning path."
  },
  {
    q: "What courses does Rise Infotech offer?",
    a: "We offer industry-focused training in SAP S/4HANA, Artificial Intelligence, Data Science, Azure Data Engineering, Corporate Training, and other emerging technologies."
  },
  {
    q: "Are the classes online or offline?",
    a: "We provide both live online instructor-led training and offline classroom sessions at our Bengaluru center. Weekend and weekday batches are available."
  },
  {
    q: "Will I receive a certificate after completing the course?",
    a: "Yes. Upon successful completion of the course, you will receive a course completion certificate. We also provide guidance for globally recognized certification exams where applicable."
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes. We provide placement assistance through resume building, LinkedIn profile optimization, mock interviews, aptitude preparation, and interview opportunities with our hiring partners."
  },
  {
    q: "Can working professionals join the courses?",
    a: "Absolutely. Our flexible weekday and weekend schedules are designed to help working professionals upgrade their skills without affecting their jobs."
  },
  {
    q: "How long are the training programs?",
    a: "Course duration depends on the program you choose. Most certification courses are completed within 6–12 weeks, while advanced programs may take longer."
  },
  {
    q: "How can I choose the right course?",
    a: "Book a free career consultation with our expert counselors. We'll understand your background, career goals, and recommend the most suitable course for you."
  }
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mb-16  bg-[#0769B4] px-8 py-14 text-center shadow-lg">

        <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-bold  tracking-[0.25em] text-white backdrop-blur-sm">
          Got Questions?
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
