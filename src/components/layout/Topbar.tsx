'use client'

import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { contactInfo, socialMediaList } from '@/data/navigation'

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
}

interface TopBarProps {
  onEnquiryClick?: () => void; // Added prop to handle opening the popup
}

export default function TopBar({ onEnquiryClick }: TopBarProps) {
  return (
    <div className="hidden md:block bg-[#0769B4] text-white">
      {/* Increased padding from py-1 to py-2 for a larger feel */}
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-10 py-2">
        {/* Bumped text size from text-s to text-sm and removed restrictive h-9 */}
        <div className="flex items-center justify-between text-sm">

          {/* Left: phone + email */}
          {/* Increased spacing gap-5 to gap-6 and icon size to 15 */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone size={15} />
              {contactInfo.displayPhone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Mail size={15} />
              {contactInfo.email}
            </a>
          </div>

          {/* Right: socials + enquiry */}
          <div className="flex items-center gap-6">
            {/* Changed social icon base color from text-slate-400 to text-white/80 and icon size to 16 */}
            <div className="flex items-center gap-4">
              {socialMediaList.map((s) => {
                const Icon = socialIcons[s.icon]
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.id}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                )
              })}
            </div>

            {/* Changed from an <a> tag to a <button> and hooked up the click handler */}
            {/* Increased text size from text-[11px] to text-xs and adjusted padding */}
            <button
              onClick={onEnquiryClick}
              className="border border-white hover:bg-white hover:text-[#0769B4] text-white rounded-md px-4 py-1.5 text-xs font-semibold transition-colors"
            >
              Enquiry
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}