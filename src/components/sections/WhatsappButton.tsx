'use client'

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "919110455125"; // Replace with Rise Infotech WhatsApp number

  return (
    <a
      href={`https://wa.me/${phone}?text=Hi%20Rise%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-400/40"
    >
      <FaWhatsapp size={28} />

      {/* Ping animation */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>
    </a>
  );
}