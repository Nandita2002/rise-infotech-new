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
    <section id="contact" className="py-20 bg-white text-black">
       <div className="text-center mb-10 bg-[#0769B4] px-8 py-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Book a Free Consultation</h2>
          <p className="text-blue-100 mt-3 text-base">
            Talk to our SAP career counsellor and find the right course for you.
          </p>
        </div>
      <Container className="max-w-2xl">
       
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 space-y-4 text-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Address"
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
          </div>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
          <select name="course" value={form.course} onChange={handleChange} title="Select a Course"
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white">
                               <option value="">Select Course</option>

<optgroup label="SAP ERP Courses">
  <option>SAP MM</option>
  <option>SAP SD</option>
  <option>SAP FICO</option>
  <option>SAP ABAP</option>
  <option>SAP BASIS</option>
  <option>Other</option> 
</optgroup>

<optgroup label="AI & Data Science">
  <option>AI Powered Data Analytics</option>
  <option>Azure Data Engineering</option>
  <option>Other</option> 
</optgroup>

<optgroup label="General Inquiry">
  
  <option>General Inquiry</option>
</optgroup>
          </select>
          <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any specific questions or goals?"
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none" />
          <button type="submit"
            className="w-full bg-[#0769B4] hover:bg-[#055A99] text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
            📅 Book Free Consultation
          </button>
        </form>
      </Container>
    </section>
  )
}
