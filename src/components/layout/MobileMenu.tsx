'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, X, Phone, Mail } from 'lucide-react'

import {
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react'

import {
  navItems,
  contactInfo,
  socialMediaList,
} from '@/data/navigation'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [expandedItem, setExpandedItem] =
    useState<string | null>(null)

  const [expandedCategory, setExpandedCategory] =
    useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 flex h-full w-80 max-w-[88vw] flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">

          <h2 className="text-lg font-bold text-slate-900">
            Menu
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const hasMegaMenu =
              !!item.megaMenu && item.megaMenu.length > 0

            const hasChildren =
              !!item.children && item.children.length > 0

            const hasDropdown = hasMegaMenu || hasChildren

            const isExpanded = expandedItem === item.label

            return (
              <div
                key={item.label}
                className="border-b border-slate-100 last:border-b-0"
              >
                {hasDropdown ? (
                  <button
                    onClick={() =>
                      setExpandedItem(
                        isExpanded ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-[#0769B4]/5 hover:text-[#0769B4]"
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      size={18}
                      className={cn(
                        'transition-transform duration-200',
                        isExpanded && 'rotate-180'
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#0769B4]/5 hover:text-[#0769B4]"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu */}
                {hasMegaMenu && isExpanded && (
                  <div className="space-y-3 pb-3 pl-3">

                    {item.megaMenu!.map((category) => {

                      const isCategoryExpanded =
                        expandedCategory === category.label

                      return (
                        <div key={category.label}>

                          <button
                            onClick={() =>
                              setExpandedCategory(
                                isCategoryExpanded
                                  ? null
                                  : category.label
                              )
                            }
                            className="flex w-full items-center justify-between rounded-md px-2 py-2 text-xs font-bold uppercase tracking-wide text-[#0769B4]"
                          >
                            {category.label}

                            <ChevronDown
                              size={14}
                              className={cn(
                                'transition-transform',
                                isCategoryExpanded &&
                                'rotate-180'
                              )}
                            />
                          </button>

                          {isCategoryExpanded && (
                            <div className="ml-2 border-l-2 border-[#0769B4]/20 pl-3">

                              {category.items.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block rounded-md px-2 py-2 text-sm text-slate-600 transition hover:bg-[#0769B4]/5 hover:text-[#0769B4]"
                                >
                                  {child.label}
                                </Link>
                              ))}

                            </div>
                          )}

                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Simple Children */}
                {hasChildren &&
                  !hasMegaMenu &&
                  isExpanded && (
                    <div className="ml-2 border-l-2 border-[#0769B4]/20 pl-3 pb-3">

                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-md px-2 py-2 text-sm text-slate-600 transition hover:bg-[#0769B4]/5 hover:text-[#0769B4]"
                        >
                          {child.label}
                        </Link>
                      ))}

                    </div>
                  )}
              </div>
            )
          })}
        </nav>

        {/* Contact Info */}
        <div className="border-t border-slate-200 px-5 py-4">

          <div className="space-y-3 text-sm">

            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 text-slate-600 transition hover:text-[#0769B4]"
            >
              <Phone size={16} className="text-[#0769B4]" />
              <span>{contactInfo.displayPhone}</span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-slate-600 transition hover:text-[#0769B4]"
            >
              <Mail size={16} className="text-[#0769B4]" />
              <span>{contactInfo.email}</span>
            </a>

          </div>

          {/* Social Media */}
          <div className="mt-5 flex items-center gap-4">

            {socialMediaList.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                className="rounded-full border border-slate-200 p-2 transition hover:border-[#0769B4] hover:bg-[#0769B4] hover:text-white"
              >
                {social.icon === 'instagram' && (
                  <Instagram size={18} />
                )}

                {social.icon === 'linkedin' && (
                  <Linkedin size={18} />
                )}

                {social.icon === 'youtube' && (
                  <Youtube size={18} />
                )}
              </Link>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 p-5">

          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-xl bg-[#0769B4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#055a99]"
          >
            Free Consultation
          </Link>

        </div>

      </aside>
    </div>
  )
}