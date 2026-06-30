import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-end gap-[3px] h-7 mb-3">
              <div className="w-2 h-3 bg-blue-500 rounded-sm" />
              <div className="w-2 h-5 bg-blue-400 rounded-sm" />
              <div className="w-2 h-7 bg-blue-300 rounded-sm" />
            </div>
            <p className="font-bold text-white text-sm">RISE INFOTECH</p>
            <p className="text-xs mt-1 mb-3 text-slate-500">Connecting with inspiration</p>
            <p className="text-xs leading-relaxed">
              Empowering SAP careers through expert-led training, live projects, and dedicated placement support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Corporate Training', 'Testimonials', 'Contact'].map((l) => (
                <li key={l}><Link href="/" className="hover:text-blue-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* SAP Courses */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">SAP Courses</h4>
            <ul className="space-y-2 text-xs">
              {['SAP MM', 'SAP SD', 'SAP FICO', 'SAP PP', 'SAP HCM', 'SAP S/4HANA'].map((c) => (
                <li key={c}><Link href="/courses" className="hover:text-blue-400 transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-xs">
              <li>📍 Bangalore, Karnataka, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@riseinfotech.in</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Rise Infotech. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
