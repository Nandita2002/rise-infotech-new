'use client'

import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { contactInfo, socialMediaList } from '@/data/navigation'

const socialIcons: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
}

export default function TopBar() {
  return (
    <div className="hidden md:block bg-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 text-s">
          {/* Left: phone + email */}
          <div className="flex items-center gap-5">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} />
              {contactInfo.displayPhone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} />
              {contactInfo.email}
            </a>
          </div>

          {/* Right: socials + enquiry */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialMediaList.map((s) => {
                const Icon = socialIcons[s.icon]
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.id}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {Icon && <Icon size={13} />}
                  </a>
                )
              })}
            </div>
            <a
              href="/contact"
              className="border border-white hover:border-blue-400 hover:text-blue-400 text-white rounded-md px-3 py-1 text-[11px] font-medium transition-colors"
            >
              Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}