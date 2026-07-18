'use client'

import type { ContactFormData } from '@/types'
import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"
import { X, CheckCircle2, AlertTriangle } from 'lucide-react'

interface AdmissionPopupProps {
  open?: boolean      // Made optional
  onClose?: () => void // Made optional
}

export default function AdmissionPopup({ open = false, onClose = () => { } }: AdmissionPopupProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [localOpen, setLocalOpen] = useState(false)

  // 1. Manage the 6-second timed auto-open rule
  useEffect(() => {
    const shown = sessionStorage.getItem("admission-popup")
    if (!shown) {
      const timer = setTimeout(() => {
        setLocalOpen(true)
        sessionStorage.setItem("admission-popup", "true")
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Combine both states: open if parent navbar clicked it OR if local auto-timer triggers it
  const isVisible = open || localOpen

  const handleClose = () => {
    setLocalOpen(false)
    onClose() // Triggers Navbar state update
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        "service_p73u4n2",
        "template_chunune",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message,
        },
        "0McgHGFaHXgjLm9mQ"
      )

      setShowSuccess(true)
      handleClose()

      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setShowError(true)
    } finally {
      setLoading(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Popup Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in">
        {/* Popup Card */}
        <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden transform transition-all duration-300 scale-100">

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-5 top-5 p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="bg-[#0769B4] px-8 py-8 text-center select-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Book a Free Consultation
            </h2>
            <p className="mt-2 text-blue-100 text-sm sm:text-base">
              Talk to our SAP career counsellor and find the right course for you.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#0769B4] focus:ring-2 focus:ring-[#0769B4]/20 outline-none transition-all"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#0769B4] focus:ring-2 focus:ring-[#0769B4]/20 outline-none transition-all"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={10}
                pattern="[0-9]{10}"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#0769B4] focus:ring-2 focus:ring-[#0769B4]/20 outline-none transition-all"
              />

              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:border-[#0769B4] focus:ring-2 focus:ring-[#0769B4]/20 outline-none transition-all"
              >
                <option value="" disabled>Select Course</option>
                <optgroup label="SAP ERP Courses">
                  <option value="SAP MM">SAP MM</option>
                  <option value="SAP SD">SAP SD</option>
                  <option value="SAP FICO">SAP FICO</option>
                  <option value="SAP ABAP">SAP ABAP</option>
                  <option value="SAP BASIS">SAP BASIS</option>
                  <option value="Other SAP">Other</option>
                </optgroup>
                <optgroup label="AI & Data Science">
                  <option value="AI Powered Data Analytics">AI Powered Data Analytics</option>
                  <option value="Azure Data Engineering">Azure Data Engineering</option>
                  <option value="Other AI">Other</option>
                </optgroup>
                <optgroup label="General Inquiry">
                  <option value="General Inquiry">General Inquiry</option>
                </optgroup>
              </select>

              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any specific questions or goals?"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#0769B4] focus:ring-2 focus:ring-[#0769B4]/20 outline-none transition-all resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#0769B4] py-3.5 font-bold text-white shadow-md hover:bg-[#055A99] hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "📅 Book Free Consultation"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl transform transition-all">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-500">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Consultation Request Sent!
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Thank you for contacting <b>Rise Infotech</b>.<br />
              Our counsellor will contact you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 w-full rounded-xl bg-[#0769B4] py-3 font-semibold text-white hover:bg-[#055A99] shadow-md transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
              <AlertTriangle size={34} />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mt-4">
              Unable to Send
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Something went wrong.<br />Please try again later.
            </p>
            <button
              onClick={() => setShowError(false)}
              className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>
  )
}