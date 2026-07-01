'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  Users,
  Award,
  BarChart2,
  Settings,
  Database,
  ShoppingCart,
  DollarSign,
  Package,
  Truck,
  Factory,
  CheckSquare,
  Wrench,
  FolderKanban,
  UserCircle,
  ShoppingBag,
  HeartHandshake,
  Layers,
  Code2,
  Shield,
  PieChart,
  Cloud,
  BrainCircuit,
  FlaskConical,
  BookOpen,
} from 'lucide-react'
import Container from '@/components/ui/Container'

// ── Types ────────────────────────────────────────────────────
interface Course {
  id: string
  title: string
  subtitle: string
  href: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  students: string
  badge?: string
}

type Tab = 'functional' | 'technical' | 'datascience' | 'workshops'

// ── Course data ──────────────────────────────────────────────
const courses: Record<Tab, Course[]> = {
  functional: [
    { id: 'mm', title: 'SAP MM', subtitle: 'Materials Management', href: '/courses/sap-mm', icon: Package, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', duration: '8 Weeks', level: 'Intermediate', students: '1200+', badge: 'Most Popular' },
    { id: 'sd', title: 'SAP SD', subtitle: 'Sales & Distribution', href: '/courses/sap-sd', icon: ShoppingCart, iconBg: 'bg-green-50', iconColor: 'text-green-600', duration: '8 Weeks', level: 'Intermediate', students: '980+' },
    { id: 'fico', title: 'SAP FICO', subtitle: 'Finance & Controlling', href: '/courses/sap-fico', icon: DollarSign, iconBg: 'bg-amber-50', iconColor: 'text-amber-600', duration: '10 Weeks', level: 'Intermediate', students: '1100+', badge: 'High Demand' },
    { id: 'ewm', title: 'SAP EWM', subtitle: 'Extended Warehouse Mgmt', href: '/courses/sap-ewm', icon: Truck, iconBg: 'bg-purple-50', iconColor: 'text-purple-600', duration: '6 Weeks', level: 'Advanced', students: '450+' },
    { id: 'tm', title: 'SAP TM', subtitle: 'Transportation Management', href: '/courses/sap-tm', icon: Truck, iconBg: 'bg-sky-50', iconColor: 'text-sky-600', duration: '6 Weeks', level: 'Advanced', students: '380+' },
    { id: 'pp', title: 'SAP PP', subtitle: 'Production Planning', href: '/courses/sap-pp', icon: Factory, iconBg: 'bg-orange-50', iconColor: 'text-orange-600', duration: '8 Weeks', level: 'Intermediate', students: '620+' },
    { id: 'qm', title: 'SAP QM', subtitle: 'Quality Management', href: '/courses/sap-qm', icon: CheckSquare, iconBg: 'bg-teal-50', iconColor: 'text-teal-600', duration: '6 Weeks', level: 'Intermediate', students: '340+' },
    { id: 'pm', title: 'SAP PM', subtitle: 'Plant Maintenance', href: '/courses/sap-pm', icon: Wrench, iconBg: 'bg-rose-50', iconColor: 'text-rose-600', duration: '6 Weeks', level: 'Intermediate', students: '290+' },
    { id: 'ps', title: 'SAP PS', subtitle: 'Project Systems', href: '/courses/sap-ps', icon: FolderKanban, iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', duration: '6 Weeks', level: 'Intermediate', students: '260+' },
    { id: 'hcm', title: 'SAP HR / HCM', subtitle: 'Human Capital Management', href: '/courses/sap-hcm', icon: UserCircle, iconBg: 'bg-pink-50', iconColor: 'text-pink-600', duration: '8 Weeks', level: 'Intermediate', students: '750+' },
    { id: 'srm', title: 'SAP SRM', subtitle: 'Supplier Relationship Mgmt', href: '/courses/sap-srm', icon: HeartHandshake, iconBg: 'bg-violet-50', iconColor: 'text-violet-600', duration: '6 Weeks', level: 'Advanced', students: '210+' },
    { id: 'crm', title: 'SAP CRM', subtitle: 'Customer Relationship Mgmt', href: '/courses/sap-crm', icon: Users, iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600', duration: '6 Weeks', level: 'Intermediate', students: '480+' },
    { id: 'plm', title: 'SAP PLM', subtitle: 'Product Lifecycle Mgmt', href: '/courses/sap-plm', icon: Layers, iconBg: 'bg-lime-50', iconColor: 'text-lime-600', duration: '6 Weeks', level: 'Advanced', students: '190+' },
    { id: 'ariba', title: 'SAP Ariba', subtitle: 'Procurement & Supply Chain', href: '/courses/sap-ariba', icon: ShoppingBag, iconBg: 'bg-amber-50', iconColor: 'text-amber-700', duration: '6 Weeks', level: 'Intermediate', students: '390+' },
  ],
  technical: [
    { id: 'abap', title: 'SAP ABAP', subtitle: 'Advanced Business App Programming', href: '/courses/sap-abap', icon: Code2, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', duration: '12 Weeks', level: 'Advanced', students: '870+', badge: 'Most Popular' },
    { id: 'basis', title: 'SAP BASIS', subtitle: 'System Administration', href: '/courses/sap-basis', icon: Settings, iconBg: 'bg-slate-50', iconColor: 'text-slate-600', duration: '10 Weeks', level: 'Intermediate', students: '540+' },
    { id: 'security', title: 'SAP Security / GRC', subtitle: 'Governance, Risk & Compliance', href: '/courses/sap-security', icon: Shield, iconBg: 'bg-red-50', iconColor: 'text-red-600', duration: '8 Weeks', level: 'Advanced', students: '410+', badge: 'High Demand' },
    { id: 'bibw', title: 'SAP BI / BW', subtitle: 'Business Intelligence & Warehousing', href: '/courses/sap-bibw', icon: BarChart2, iconBg: 'bg-green-50', iconColor: 'text-green-600', duration: '10 Weeks', level: 'Intermediate', students: '660+' },
    { id: 'btp', title: 'SAP BTP', subtitle: 'Business Technology Platform', href: '/courses/sap-btp', icon: Cloud, iconBg: 'bg-sky-50', iconColor: 'text-sky-600', duration: '8 Weeks', level: 'Advanced', students: '320+', badge: 'New' },
  ],
  datascience: [
    { id: 'ds', title: 'Data Science', subtitle: 'Python, ML & Statistical Analysis', href: '/courses/data-science', icon: BrainCircuit, iconBg: 'bg-purple-50', iconColor: 'text-purple-600', duration: '16 Weeks', level: 'Intermediate', students: '890+', badge: 'New' },
    { id: 'ml', title: 'Machine Learning', subtitle: 'Supervised, Unsupervised & Deep Learning', href: '/courses/machine-learning', icon: BrainCircuit, iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', duration: '12 Weeks', level: 'Advanced', students: '640+' },
    { id: 'bi', title: 'Business Intelligence', subtitle: 'Power BI, Tableau & Data Visualization', href: '/courses/business-intelligence', icon: PieChart, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', duration: '8 Weeks', level: 'Beginner', students: '720+', badge: 'High Demand' },
    { id: 'sql', title: 'SQL & Database', subtitle: 'SQL, PostgreSQL & Database Design', href: '/courses/sql', icon: Database, iconBg: 'bg-orange-50', iconColor: 'text-orange-600', duration: '6 Weeks', level: 'Beginner', students: '1100+' },
    { id: 'python', title: 'Python for Data', subtitle: 'NumPy, Pandas & Data Wrangling', href: '/courses/python', icon: Code2, iconBg: 'bg-green-50', iconColor: 'text-green-600', duration: '8 Weeks', level: 'Beginner', students: '950+' },
  ],
  workshops: [
    { id: 'ws-s4', title: 'SAP S/4HANA Migration', subtitle: '2-day intensive workshop', href: '/workshops/s4hana', icon: FlaskConical, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', duration: '2 Days', level: 'Advanced', students: '300+', badge: 'Weekend Batch' },
    { id: 'ws-fiori', title: 'SAP Fiori & UI5', subtitle: 'Build modern SAP apps', href: '/workshops/fiori', icon: Layers, iconBg: 'bg-sky-50', iconColor: 'text-sky-600', duration: '3 Days', level: 'Intermediate', students: '240+', badge: 'Weekend Batch' },
    { id: 'ws-cert', title: 'SAP Certification Prep', subtitle: 'Crack SAP cert in first attempt', href: '/workshops/certification', icon: Award, iconBg: 'bg-amber-50', iconColor: 'text-amber-600', duration: '1 Week', level: 'Intermediate', students: '560+', badge: 'High Success Rate' },
    { id: 'ws-resume', title: 'SAP Career Bootcamp', subtitle: 'Resume, LinkedIn & mock interviews', href: '/workshops/career', icon: UserCircle, iconBg: 'bg-green-50', iconColor: 'text-green-600', duration: '2 Days', level: 'Beginner', students: '780+', badge: 'Free' },
    { id: 'ws-ds', title: 'Data Science Bootcamp', subtitle: 'End-to-end ML project workshop', href: '/workshops/data-science', icon: BrainCircuit, iconBg: 'bg-purple-50', iconColor: 'text-purple-600', duration: '3 Days', level: 'Intermediate', students: '420+', badge: 'Weekend Batch' },
    { id: 'ws-power', title: 'Power BI Masterclass', subtitle: 'Dashboards & advanced analytics', href: '/workshops/powerbi', icon: BarChart2, iconBg: 'bg-rose-50', iconColor: 'text-rose-600', duration: '2 Days', level: 'Beginner', students: '610+', badge: 'New' },
  ],
}

// ── Tab config ───────────────────────────────────────────────
const tabs: { key: Tab; label: string; icon: React.ElementType; count: number }[] = [
  { key: 'functional', label: 'SAP Functional', icon: Settings, count: courses.functional.length },
  { key: 'technical', label: 'SAP Technical', icon: Code2, count: courses.technical.length },
  { key: 'datascience', label: 'Data Science', icon: BrainCircuit, count: courses.datascience.length },
  { key: 'workshops', label: 'Workshops', icon: FlaskConical, count: courses.workshops.length },
]

// ── Level badge ──────────────────────────────────────────────
const levelColor: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700',
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-purple-50 text-purple-700',
}

const badgeColor: Record<string, string> = {
  'Most Popular': 'bg-blue-600 text-white',
  'High Demand': 'bg-amber-500 text-white',
  'New': 'bg-green-500 text-white',
  'Weekend Batch': 'bg-purple-600 text-white',
  'High Success Rate': 'bg-teal-600 text-white',
  'Free': 'bg-rose-500 text-white',
}

// ── Course card ──────────────────────────────────────────────
function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Badge */}
      {course.badge && (
        <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor[course.badge] ?? 'bg-slate-100 text-slate-600'}`}>
          {course.badge}
        </span>
      )}

      <div className="p-5 flex-1">
        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`${course.iconBg} rounded-xl p-2.5 flex-shrink-0`}>
            <Icon size={20} className={course.iconColor} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-slate-400 text-[12px] mt-0.5 leading-tight">{course.subtitle}</p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap mt-4">
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <Clock size={11} /> {course.duration}
          </span>
          <span className="text-slate-200">•</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <Users size={11} /> {course.students}
          </span>
          <span className="text-slate-200">•</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${levelColor[course.level]}`}>
            {course.level}
          </span>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3 border-t border-slate-50 flex items-center justify-between">
        <Link
          href={course.href}
          className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/link"
        >
          View Details
          <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
        </Link>
        <Link
          href="/contact"
          className="text-[11px] font-semibold bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white px-3 py-1 rounded-lg transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────────────────────
export default function Courses() {
  const [activeTab, setActiveTab] = useState<Tab>('functional')

  return (
    <section id="courses" className="py-16 lg:py-24 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Explore Our Courses
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Industry-aligned SAP, Data Science, and professional development programmes
            taught by certified consultants with real-world experience.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <TabIcon size={15} />
                {tab.label}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Course grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {courses[activeTab].map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Can't find what you're looking for? We offer custom corporate batches too.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <BookOpen size={15} />
              View All Courses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-blue-200 hover:border-blue-400 text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl transition-all bg-white hover:bg-blue-50"
            >
              Talk to a Counsellor
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}