'use client'

import Container from '@/components/ui/Container'

export default function Instructor() {
  return (
    <section id="instructor" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Meet the Expert</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Your Instructor</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 flex flex-col sm:flex-row gap-8 items-center border border-slate-100">
          <div className="w-32 h-32 bg-blue-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl">
            👨‍💼
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Kumaresh Bidari</h3>
            <p className="text-blue-600 text-sm font-semibold mt-0.5 mb-3">
              SAP S/4HANA MM Consultant · Corporate Trainer · Founder & CEO, Rise Infotech
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              15+ years of experience in SAP Materials Management and Supply Chain. Certified SAP consultant
              who has delivered corporate training for Fortune 500 companies across India and abroad.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['SAP MM', 'SAP S/4HANA', 'Corporate Training', 'Supply Chain'].map((tag) => (
                <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
