"use client"

import { useState } from "react"
import { Download, CheckCircle2 } from "lucide-react"
import BrochurePopup from "@/components/common/BrochurePopup"
import emailjs from "@emailjs/browser"

interface BrochureSidebarProps {
  brochure: string
  courseName: string
}

export default function BrochureSidebar({
  brochure,
  courseName,
}: BrochureSidebarProps) {
  const [showPopup, setShowPopup] = useState(false)

  return (

    <>
      {/* Desktop */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

          {/* Icon */}
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Download
                className="text-[#0769B4]"
                size={30}
              />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-center text-2xl font-bold text-slate-900">
            Download Brochure
          </h3>

          <p className="mt-3 text-center text-sm leading-6 text-slate-600">
            Get complete course syllabus, duration,
            certification, projects and placement details.
          </p>

          {/* Course Name */}
          <div className="mt-5 rounded-xl bg-blue-50 py-3 text-center font-semibold text-[#0769B4]">
            {courseName}
          </div>

          {/* Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0769B4] py-3 font-semibold text-white transition hover:bg-[#055A99]"
          >
            <Download size={18} />
            Download Brochure
          </button>

          {/* Features */}
          <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-[#0769B4]"
              />
              <span className="text-sm text-slate-700">
                Complete Course Syllabus
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-[#0769B4]"
              />
              <span className="text-sm text-slate-700">
                Course Duration
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-[#0769B4]"
              />
              <span className="text-sm text-slate-700">
                Certification Details
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-[#0769B4]"
              />
              <span className="text-sm text-slate-700">
                Placement Assistance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-[#0769B4]"
              />
              <span className="text-sm text-slate-700">
                Real-Time Projects
              </span>
            </div>

          </div>

        </div>
      </aside>

      {/* Mobile */}
      <div className="lg:hidden px-4 pb-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">

          <h3 className="text-xl font-bold text-[#0769B4]">
            Download Brochure
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Get the complete syllabus, fee structure, projects and placement details.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="mt-5 w-full rounded-xl bg-[#0769B4] py-3 font-semibold text-white hover:bg-[#055A99]"
          >
            Download Brochure
          </button>

        </div>
      </div>


      {/* Popup */}

      <BrochurePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        brochure={brochure}
        courseName={courseName}
        onSubmit={async (data) => {
          await emailjs.send(
            "service_p73u4n2",
            "template_chunune",
            {
              name: data.name,
              email: data.email,
              phone: data.phone,
              course: data.course,
              message: `Brochure download request for ${data.course}`,
            },
            "0McgHGFaHXgjLm9mQ"
          )
        }}
      />

    </>
  )
}