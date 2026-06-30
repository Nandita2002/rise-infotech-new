'use client'

import Container from '@/components/ui/Container'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'SAP MM Consultant, TCS',
    content: 'Rise Infotech transformed my career. The hands-on project training and placement support were exceptional. I landed a job within 2 months of completing the course.',
    rating: 5,
    course: 'SAP MM',
  },
  {
    name: 'Rahul Verma',
    role: 'SAP SD Analyst, Infosys',
    content: 'Best SAP training institute in Bangalore. The certified trainers explain complex concepts in a very practical and easy-to-understand manner.',
    rating: 5,
    course: 'SAP SD',
  },
  {
    name: 'Anjali Nair',
    role: 'SAP FICO Consultant, Wipro',
    content: 'The certification guidance was spot-on. I cleared my SAP certification in the first attempt thanks to the structured preparation support from Rise Infotech.',
    rating: 5,
    course: 'SAP FICO',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Success Stories</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What Our Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-base">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
