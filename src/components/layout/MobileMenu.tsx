'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, X, Phone, Mail } from 'lucide-react'
import { navItems, contactInfo } from '@/data/navigation'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <span className="font-semibold text-slate-800">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {navItems.map((item) => {
            const hasMegaMenu = item.megaMenu && item.megaMenu.length > 0
            const hasChildren = item.children && item.children.length > 0
            const hasDropdown = hasMegaMenu || hasChildren
            const isExpanded = expandedItem === item.label

            return (
              <div key={item.label}>
                {hasDropdown ? (
                  <button
                    onClick={() =>
                      setExpandedItem(isExpanded ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        'transition-transform duration-200',
                        isExpanded ? 'rotate-180' : '',
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega menu → category accordion */}
                {hasMegaMenu && isExpanded && (
                  <div className="ml-3 mt-1 space-y-1">
                    {item.megaMenu!.map((category) => {
                      const isCatExpanded = expandedCategory === category.label
                      return (
                        <div key={category.label}>
                          <button
                            onClick={() =>
                              setExpandedCategory(
                                isCatExpanded ? null : category.label,
                              )
                            }
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wide text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {category.label}
                            <ChevronDown
                              size={13}
                              className={cn(
                                'transition-transform duration-200',
                                isCatExpanded ? 'rotate-180' : '',
                              )}
                            />
                          </button>
                          {isCatExpanded && (
                            <div className="ml-2 border-l-2 border-blue-100 pl-3 py-1 space-y-0.5">
                              {category.items.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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

                {/* Simple single-column dropdown */}
                {hasChildren && !hasMegaMenu && isExpanded && (
                  <div className="ml-4 mt-1 border-l-2 border-blue-100 pl-3 space-y-0.5">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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

        {/* Contact info */}
        <div className="px-5 py-3 border-t border-slate-100 space-y-2 text-xs text-slate-500">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-blue-600">
            <Phone size={13} /> {contactInfo.displayPhone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-blue-600">
            <Mail size={13} /> {contactInfo.email}
          </a>
        </div>

        {/* CTA */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}