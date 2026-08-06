"use client"

import { useEffect, useState } from "react"
import { X, Download, Loader2 } from "lucide-react"

interface BrochurePopupProps {
  isOpen: boolean
  onClose: () => void
  brochure: string
  courseName: string
  onSubmit: (data: {
    name: string
    email: string
    phone: string
    course: string
  }) => Promise<void>
}

export default function BrochurePopup({
  isOpen,
  onClose,
  brochure,
  courseName,
  onSubmit,
}: BrochurePopupProps) {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    if (!isOpen) {
      setForm({
        name: "",
        email: "",
        phone: "",
      })
      setLoading(false)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const downloadBrochure = () => {
    if (!brochure) {
      alert("Brochure not found.");
      return;
    }

    // Create an absolute URL
    const brochureUrl = `${window.location.origin}${brochure}`;

    // Open/download the PDF
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.target = "_blank";
    link.download = brochure.split("/").pop() || "brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await onSubmit({
        ...form,
        course: courseName,
      });

      // Download brochure after successful form submission
      downloadBrochure();

      // Close popup
      onClose();
    } catch (error) {
      console.error("Brochure Download Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {/* Icon */}
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Download
                size={30}
                className="text-[#0769B4]"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Download Brochure
          </h2>

          <p className="mt-2 text-center text-sm text-slate-500">
            Fill in your details to download the brochure.
          </p>

          {/* Course Name */}
          <div className="mt-5 rounded-lg bg-blue-50 py-3 text-center font-semibold text-[#0769B4]">
            {courseName}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0769B4] focus:ring-2 focus:ring-blue-100"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0769B4] focus:ring-2 focus:ring-blue-100"
            />

            <input
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0769B4] focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0769B4] py-3 font-semibold text-white transition hover:bg-[#055A99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Please wait...
                </>
              ) : (
                <>
                  <Download size={18} />
                  Download Brochure
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            By downloading the brochure, you agree to be contacted by Rise
            Infotech regarding this course.
          </p>
        </div>
      </div>
    </div>
  )
}