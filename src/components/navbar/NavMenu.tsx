'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export default function NavMenu() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => {
        const hasMegaMenu = item.megaMenu && item.megaMenu.length > 0
        const hasChildren = item.children && item.children.length > 0
        const hasDropdown = hasMegaMenu || hasChildren

        const isActive =
          pathname === item.href ||
          item.megaMenu?.some((cat) =>
            cat.items.some((child) => pathname === child.href),
          ) ||
          item.children?.some((child) => pathname === child.href)

        if (hasDropdown) {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-200',
                  isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600',
                )}
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className={cn(
                    'transition-transform duration-200',
                    openDropdown === item.label && 'rotate-180',
                  )}
                />
              </button>

              {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600" />
              )}

              {/* ── Mega menu (multi-column, for SAP Courses) ── */}
              {hasMegaMenu && (
                <div
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 top-full z-50 mt-1.5 w-[560px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all duration-200 origin-top',
                    openDropdown === item.label
                      ? 'visible translate-y-0 opacity-100 scale-100'
                      : 'invisible -translate-y-1 opacity-0 scale-95 pointer-events-none',
                  )}
                >
                  <div className="grid grid-cols-2 gap-x-6 p-5">
                    {item.megaMenu!.map((category) => (
                      <div key={category.label}>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2 px-2">
                          {category.label}
                        </p>
                        <div className="space-y-0.5">
                          {category.items.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={cn(
                                'block rounded-lg px-2 py-1.5 text-[13px] font-medium transition-colors duration-150',
                                pathname === child.href
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600',
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer CTA strip inside mega menu */}
                  <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                    <Link
                      href="/courses"
                      className="text-[12px] font-semibold text-blue-600 hover:text-blue-700"
                    >
                      View all SAP courses →
                    </Link>
                  </div>
                </div>
              )}

              {/* ── Simple single-column dropdown ── */}
              {hasChildren && !hasMegaMenu && (
                <div
                  className={cn(
                    'absolute left-0 top-full z-50 mt-1.5 w-52 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-lg transition-all duration-200 origin-top',
                    openDropdown === item.label
                      ? 'visible translate-y-0 opacity-100 scale-100'
                      : 'invisible -translate-y-1 opacity-0 scale-95 pointer-events-none',
                  )}
                >
                  <div className="py-1.5">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={cn(
                          'block px-4 py-2.5 text-[13px] font-medium transition-colors duration-150',
                          pathname === child.href
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600',
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }

        return (
          <div key={item.label} className="relative">
            <Link
              href={item.href}
              className={cn(
                'block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-200',
                isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600',
              )}
            >
              {item.label}
            </Link>
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600" />
            )}
          </div>
        )
      })}
    </nav>
  )
}