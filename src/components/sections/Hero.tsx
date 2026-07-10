'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  Monitor,
  Users,
  Award,
  BookOpen,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInRight,
  float,
} from '@/lib/animation'

// ── Floating feature card ────────────────────────────────────
interface FeaturePillProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  className?: string
  delay?: number
  iconBg?: string
}

function FeaturePill({
  icon,
  title,
  subtitle,
  className = '',
  delay = 0,
  iconBg = 'bg-blue-100',
}: FeaturePillProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={`absolute bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex items-center gap-2.5 w-44 z-20 ${className}`}
    >
      <div className={`${iconBg} rounded-xl p-2 flex-shrink-0`}>{icon}</div>
      <div>
        <p className="text-[11px] font-bold text-slate-800 leading-tight">{title}</p>
        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{subtitle}</p>
      </div>
    </motion.div>
  )
}

// ── Stat badge ───────────────────────────────────────────────
interface StatBadgeProps {
  value: string
  label: string
  color?: string
}

function StatBadge({ value, label, color = 'text-blue-600' }: StatBadgeProps) {
  return (
    <div className="text-center">
      <p className={`text-xl sm:text-2xl font-extrabold ${color}`}>{value}</p>
      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5 whitespace-nowrap">{label}</p>
    </div>
  )
}

// ── Network node dot ─────────────────────────────────────────
interface NodeProps {
  cx: number
  cy: number
  r?: number
  delay?: number
  color?: string
}

function NetworkNode({ cx, cy, r = 5, delay = 0, color = '#3b82f6' }: NodeProps) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

// ── Animated network SVG ─────────────────────────────────────
function NetworkBackground() {
  // nodes: [x, y, radius, delay, color]
  const nodes: [number, number, number, number, string][] = [
    [80,  60,  6, 0.0, '#3b82f6'],
    [200, 30,  5, 0.3, '#818cf8'],
    [340, 80,  7, 0.6, '#3b82f6'],
    [460, 40,  5, 0.2, '#a78bfa'],
    [520, 150, 6, 0.8, '#3b82f6'],
    [400, 200, 5, 0.4, '#60a5fa'],
    [260, 190, 7, 0.9, '#3b82f6'],
    [120, 180, 5, 0.5, '#818cf8'],
    [60,  300, 6, 0.7, '#3b82f6'],
    [200, 340, 5, 0.3, '#60a5fa'],
    [380, 320, 6, 0.6, '#818cf8'],
    [500, 290, 5, 0.1, '#3b82f6'],
    [300, 420, 6, 0.8, '#a78bfa'],
    [140, 420, 5, 0.4, '#3b82f6'],
    [460, 430, 5, 0.2, '#60a5fa'],
  ]

  // edges between node pairs
  const edges: [number, number][] = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
    [1,6],[2,5],[6,9],[8,13],[9,12],[10,11],[11,4],
    [7,8],[12,14],[13,9],[5,10],[3,10],[14,11],
  ]

  return (
    <svg
      viewBox="0 0 580 480"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#93c5fd"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map(([cx, cy, r, delay, color], i) => (
        <NetworkNode key={i} cx={cx} cy={cy} r={r} delay={delay} color={color} />
      ))}

      {/* Traveling pulse along a few edges */}
      {[[0,1],[2,5],[6,9],[4,11]].map(([a,b], i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="3"
          fill="#2563eb"
          opacity="0.8"
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'linear',
          }}
          style={{
            offsetPath: `path('M ${nodes[a][0]} ${nodes[a][1]} L ${nodes[b][0]} ${nodes[b][1]}')`,
          } as React.CSSProperties}
        />
      ))}
    </svg>
  )
}

// ── Partner logos ────────────────────────────────────────────
const sapPartners = [
  {
    name: "SAP",
    logo: "SAP",
    color: "#123498",
  },
  {
    name: "S/4HANA",
    logo: "S/4HANA",
    color: "#0F5CC0",
  },
  {
    name: "BTP",
    logo: "BTP",
    color: "#0A4AA3",
  },
  {
    name: "ABAP",
    logo: "ABAP",
    color: "#1D4ED8",
  },
  {
    name: "Success",
    logo: "Industry Ready",
    color: "#1E3A8A",
  },
]
// ── Main Hero ────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background blobs */}
    {/* Background Decorations */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* Top-right blue glow */}
  <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-blue-50 blur-3xl opacity-80" />

  {/* Center soft glow behind illustration */}
  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />
</div>

      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pt-10 pb-4 lg:pt-14 lg:pb-0">

          {/* ── LEFT: copy ─────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 w-full text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-5"
            >
              <Users size={13} className="text-[#0769B4]" />
              <span className="text-[#0769B4] text-xs font-semibold">
                Trusted by 5000+ SAP Learners
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4"
            >
              Build Your{' '}
              <span className="text-[#0769B4] block">SAP Career</span>
              with Industry Experts
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base leading-7 text-slate-500 mb-7 max-w-lg mx-auto lg:mx-0"
            >
              Learn SAP Functional &amp; Technical Modules through live instructor-led
              sessions, real-time projects, certification guidance and dedicated placement
              assistance.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <Link
  href="/courses"
  className="inline-flex items-center gap-2 bg-[#0769B4] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#055A99] hover:shadow-lg hover:shadow-[#123498]/30"
>
  <BookOpen size={15} />
  Explore Courses
  <ArrowRight size={14} />
</Link>
           <Link
  href="/contact"
  className="inline-flex items-center gap-2 border-2 border-[#0769B4] px-5 py-3 text-sm font-semibold text-[#0769B4] transition-all duration-300 hover:border-[#0F2E88] hover:text-[#0F2E88]"
>
  <Calendar size={14} />
  Book a Consultation
</Link>
            </motion.div>

            {/* Feature checkmarks */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7"
            >
              {['Live Projects', 'Placement Assistance', 'SAP Certified Trainers'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={15} className="text-blue-600 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-4 sm:gap-8 bg-white border border-slate-100 rounded-2xl px-4 sm:px-7 py-4 shadow-sm">
                <StatBadge value="15+" label="Years of Excellence" color="text-slate-800" />
                <div className="w-px h-10 bg-slate-100 flex-shrink-0" />
                <StatBadge value="5000+" label="Students Trained" color="text-blue-600" />
                <div className="w-px h-10 bg-slate-100 flex-shrink-0" />
                <StatBadge value="30+" label="SAP Modules" color="text-slate-800" />
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: network + image + floating cards ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex-1 relative flex items-center justify-center w-full min-h-[420px] lg:min-h-[540px]"
          >
            {/* Animated network background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <NetworkBackground />
            </div>

            {/* Soft blue circle behind student */}
            <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] bg-gradient-to-br from-blue-100/80 to-blue-50/60 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Paper plane */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 right-16 lg:right-20 z-10"
            >
              <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
                <path d="M33 3L16.5 19.5M33 3L22.5 33L16.5 19.5M33 3L3 13.5L16.5 19.5"
                  stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Student image */}
            <motion.div animate={float.animate} className="relative z-10">
              <Image
                src="/heroimage.png"
                alt="SAP student learning on laptop"
                width={520}
                height={480}
                className="w-[260px] sm:w-[340px] lg:w-[420px] xl:w-[480px] h-auto object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating cards */}
            <FeaturePill
              icon={<Monitor size={14} className="text-blue-600" />}
              title="Live Projects"
              subtitle="Real-time Industry Projects"
              className="top-4 right-2 lg:right-0 xl:-right-4"
              iconBg="bg-blue-50"
              delay={0.3}
            />
            <FeaturePill
              icon={<Award size={14} className="text-purple-600" />}
              title="SAP Certified Trainers"
              subtitle="Learn from Industry Experts"
              className="top-24 lg:top-28 right-0 lg:-right-4 xl:-right-8"
              iconBg="bg-purple-50"
              delay={0.5}
            />
            <FeaturePill
              icon={<CheckCircle2 size={14} className="text-green-600" />}
              title="Placement Assistance"
              subtitle="100% Placement Support"
              className="bottom-28 lg:bottom-32 left-0 lg:-left-4 xl:-left-8"
              iconBg="bg-green-50"
              delay={0.7}
            />
            <FeaturePill
              icon={<BookOpen size={14} className="text-amber-600" />}
              title="Certification Guidance"
              subtitle="End-to-end Support"
              className="bottom-10 lg:bottom-14 right-0 lg:right-2 xl:-right-2"
              iconBg="bg-amber-50"
              delay={0.9}
            />
          </motion.div>

        </div>
      </Container>

  {/* ── SAP Technologies ─────────────────────────────────── */}
<motion.div
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-8 border-y border-slate-100 bg-slate-50 py-6"
>
<Container>
  <div className="text-center">

    <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#0769B4]">
      OUR TRAINING ALIGNS WITH
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      {sapPartners.map((partner) => (

        <div
          key={partner.name}
          className="border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0769B4] hover:shadow-lg"
        >

          <span
            className="text-base font-bold tracking-wide"
            style={{ color: partner.color }}
          >
            {partner.logo}
          </span>

        </div>

      ))}

    </div>

  </div>
</Container>
</motion.div>
    </section>
  )
}