// ── Navigation ──────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// ── Courses ──────────────────────────────────────────────────
export interface Course {
  id: string
  title: string
  category: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  icon: string
  description: string
  modules: number
  students: number
  featured?: boolean
}

// ── Why Choose Us ────────────────────────────────────────────
export interface FeatureCard {
  id: string
  icon: string
  title: string
  description: string
  color: string
}

// ── Instructor ───────────────────────────────────────────────
export interface Instructor {
  id: string
  name: string
  role: string
  bio: string
  experience: string
  image: string
  expertise: string[]
  certifications: string[]
  linkedin?: string
}

// ── Testimonials ─────────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  course: string
}

// ── FAQ ──────────────────────────────────────────────────────
export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

// ── Stats ────────────────────────────────────────────────────
export interface StatItem {
  value: string
  label: string
  color?: string
}

// ── Contact Form ─────────────────────────────────────────────
export interface ContactFormData {
  name: string
  email: string
  phone: string
  course: string
  message: string
}
