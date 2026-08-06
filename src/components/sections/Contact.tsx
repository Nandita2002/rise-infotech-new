'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import type { ContactFormData } from '@/types'
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_p73u4n2", // Replace if your service ID is different
        "template_chunune", // Replace if your template ID is different
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message,
        },
        "0McgHGFaHXgjLm9mQ" // Replace if your public key is different
      );

      setShowSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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
          <input
            type="tel"
            name="phone"
            disabled={loading}
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-70"

          />
          <select name="course" value={form.course} onChange={handleChange} required title="Select a Course"
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white" >
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
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0769B4] py-3.5 text-sm font-bold text-white transition hover:bg-[#055A99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "📅 Book Free Consultation"}
          </button>
        </form>
      </Container>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Consultation Request Sent!
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Thank you for contacting <span className="font-semibold text-[#0769B4]">Rise Infotech</span>.
              <br />
              Our career counsellor will contact you within <b>24 hours</b>.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 w-full rounded-xl bg-[#0769B4] py-3 font-semibold text-white transition hover:bg-[#055A99]"
            >
              Continue
            </button>

          </div>
        </div>
      )}

      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-10 w-10 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Unable to Send
            </h3>

            <p className="mt-3 text-slate-600">
              Something went wrong while sending your enquiry.
              Please try again after a few minutes.
            </p>

            <button
              onClick={() => setShowError(false)}
              className="mt-8 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Try Again
            </button>

          </div>
        </div>
      )}
    </section>
  )
}
