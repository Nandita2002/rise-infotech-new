'use client'

import Container from '@/components/ui/Container'

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our SAP Courses
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
            Industry-aligned SAP modules taught by certified consultants with years of real-world experience.
          </p>
        </div>
        {/* Course cards will go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['SAP MM', 'SAP SD', 'SAP FICO', 'SAP PP', 'SAP HCM', 'SAP S/4HANA'].map((course) => (
            <div
              key={course}
              className="border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <span className="text-blue-600 font-bold text-xs">SAP</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{course}</h3>
              <p className="text-slate-500 text-sm">
                Comprehensive training with live projects and certification guidance.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
