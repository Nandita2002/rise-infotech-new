'use client'

import Container from '@/components/ui/Container'

const features = [
  { icon: '🎯', title: 'Industry-Focused Curriculum', desc: 'Curriculum aligned with real SAP project requirements.' },
  { icon: '👨‍🏫', title: 'Certified Trainers', desc: 'Learn from SAP-certified professionals with 10+ years of experience.' },
  { icon: '💼', title: '100% Placement Support', desc: 'Dedicated placement team to help you land your dream SAP job.' },
  { icon: '🖥️', title: 'Live Project Training', desc: 'Hands-on exposure with real-time industry project simulations.' },
  { icon: '📜', title: 'Certification Guidance', desc: 'End-to-end support for SAP certification exams.' },
  { icon: '🔄', title: 'Flexible Batches', desc: 'Weekday and weekend batches to suit your schedule.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Why Rise Infotech</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Makes Us Different
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
