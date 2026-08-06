'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2, Loader2, Smartphone, CreditCard, Landmark, ShieldCheck } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// ⚠️ DUMMY CHECKOUT — NOT A REAL PAYMENT GATEWAY
//
// This simulates the Razorpay checkout UI/UX so the flow can be demoed
// and approved before wiring up a real gateway. No payment is actually
// processed — the "Pay" button just fakes a processing delay and shows
// a success screen.
//
// To go live with real Razorpay later:
//   1. Create a Razorpay account & get a Key ID / Key Secret.
//   2. Create an order server-side via Razorpay's Orders API (needs a
//      backend route — this project currently has none).
//   3. Load https://checkout.razorpay.com/v1/checkout.js and call
//      `new window.Razorpay({ key, order_id, ...}).open()` instead of
//      the simulateProcessing() function below.
//   4. Verify the payment signature server-side before confirming
//      enrollment — never trust a client-side "success" alone.
// ─────────────────────────────────────────────────────────────

interface BuyCourseModalProps {
  courseTitle: string
  price: number
}

type Step = 'details' | 'checkout' | 'processing' | 'success'
type PayMethod = 'upi' | 'card' | 'netbanking'

export default function BuyCourseModal({ courseTitle, price }: BuyCourseModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<Step>('details')
  const [method, setMethod] = useState<PayMethod>('upi')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [upiVpa, setUpiVpa] = useState('')

  function reset() {
    setStep('details')
    setMethod('upi')
    setName('')
    setEmail('')
    setPhone('')
    setUpiVpa('')
  }

  function close() {
    setIsOpen(false)
    setTimeout(reset, 300)
  }

  function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('checkout')
  }

  function simulateProcessing(e: React.FormEvent) {
    e.preventDefault()
    setStep('processing')
    // Dummy delay to mimic a real gateway round-trip.
    setTimeout(() => setStep('success'), 1800)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Enroll Now <ArrowRight size={13} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
            onClick={step === 'processing' ? undefined : close}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white"
            >
              {step !== 'processing' && (
                <button
                  onClick={close}
                  className="absolute right-4 top-4 z-10 text-white/80 hover:text-white"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              )}

              {/* Step 1 — Details */}
              {step === 'details' && (
                <div className="p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">
                    {courseTitle}
                  </p>
                  <h3 className="mb-5 text-lg font-bold text-slate-900">Your Details</h3>
                  <form onSubmit={handleDetailsSubmit} className="space-y-3">
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                    />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                    />
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2 — Razorpay-style checkout (dummy) */}
              {step === 'checkout' && (
                <div>
                  {/* Header bar mimicking Razorpay's checkout header */}
                  <div className="bg-[#0c2451] px-6 py-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Rise Infotech</p>
                        <p className="text-xs text-white/60">{courseTitle}</p>
                      </div>
                      <p className="text-xl font-extrabold">₹{price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Method tabs */}
                    <div className="mb-5 flex gap-2 rounded-xl bg-slate-50 p-1">
                      {[
                        { key: 'upi' as const, label: 'UPI', icon: Smartphone },
                        { key: 'card' as const, label: 'Card', icon: CreditCard },
                        { key: 'netbanking' as const, label: 'Netbanking', icon: Landmark },
                      ].map((m) => (
                        <button
                          key={m.key}
                          onClick={() => setMethod(m.key)}
                          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-colors ${
                            method === m.key
                              ? 'bg-white text-blue-600 shadow-sm'
                              : 'text-slate-500 hover:text-slate-700'
                          }`}
                        >
                          <m.icon size={13} /> {m.label}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={simulateProcessing} className="space-y-3">
                      {method === 'upi' && (
                        <input
                          required
                          value={upiVpa}
                          onChange={(e) => setUpiVpa(e.target.value)}
                          placeholder="yourname@upi"
                          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                        />
                      )}
                      {method === 'card' && (
                        <div className="space-y-3">
                          <input
                            placeholder="Card number"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                          />
                          <div className="flex gap-3">
                            <input
                              placeholder="MM / YY"
                              className="w-1/2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                            />
                            <input
                              placeholder="CVV"
                              className="w-1/2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                        </div>
                      )}
                      {method === 'netbanking' && (
                        <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none">
                          <option>Select your bank</option>
                          <option>State Bank of India</option>
                          <option>HDFC Bank</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                        </select>
                      )}

                      <button
                        type="submit"
                        className="w-full rounded-xl bg-[#0c2451] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132f66]"
                      >
                        Pay ₹{price.toLocaleString('en-IN')}
                      </button>
                    </form>

                    <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                      <ShieldCheck size={12} /> Secured checkout (demo mode — no live payment)
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3 — Processing */}
              {step === 'processing' && (
                <div className="flex flex-col items-center justify-center gap-4 px-6 py-16">
                  <Loader2 size={32} className="animate-spin text-blue-600" />
                  <p className="text-sm font-medium text-slate-600">Processing your payment…</p>
                </div>
              )}

              {/* Step 4 — Success */}
              {step === 'success' && (
                <div className="px-6 py-10 text-center">
                  <CheckCircle2 size={40} className="mx-auto mb-3 text-green-500" />
                  <p className="mb-1 font-semibold text-slate-800">Payment Successful (Demo)</p>
                  <p className="mb-5 text-sm text-slate-500">
                    This is a simulated confirmation for demo purposes — no real payment was made. Once
                    a payment gateway is connected, this step will show a genuine transaction receipt.
                  </p>
                  <button
                    onClick={close}
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}