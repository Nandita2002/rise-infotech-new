'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import type { ContactFormData } from '@/types'

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to backend / email service
    alert('Thank you! We will contact you shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <Container className="max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Book a Free Consultation</h2>
          <p className="text-blue-100 mt-3 text-base">
            Talk to our SAP career counsellor and find the right course for you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Address"
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
          </div>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
          <select name="course" value={form.course} onChange={handleChange}
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white">
            <option value="">Select a Course</option>
            {['SAP MM', 'SAP SD', 'SAP FICO', 'SAP PP', 'SAP HCM', 'SAP S/4HANA', 'SAP Fiori', 'SAP SuccessFactors'].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any specific questions or goals?"
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none" />
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
            📅 Book Free Consultation
          </button>
        </form>
      </Container>
    </section>
  )
}
