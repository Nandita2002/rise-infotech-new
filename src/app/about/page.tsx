import Image from "next/image";
import Link from "next/link";
import { Star, Award, Building2 } from "lucide-react";

import {
  GraduationCap,
  Laptop,
  ShieldCheck,
  Users,
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTA";
import { Instagram, Linkedin } from "lucide-react";

const features = [
  "SAP ERP Training",
  "AI & Data Science",
  "Corporate Training",
  "Live Projects",
  "Placement Assistance",
  "IT Consulting",
];

const whyChoose = [
  {
    icon: GraduationCap,
    title: "Industry Expert Trainers",
    description:
      "Learn from experienced SAP consultants and industry professionals with real implementation expertise.",
  },
  {
    icon: Laptop,
    title: "Hands-on Live Projects",
    description:
      "Gain practical experience through real-world projects, assignments and business case studies.",
  },
  {
    icon: ShieldCheck,
    title: "Certification Guidance",
    description:
      "Expert mentoring, certification preparation and continuous support to help you achieve your goals.",
  },
  {
    icon: Users,
    title: "Placement Assistance",
    description:
      "Resume preparation, mock interviews and career guidance to help learners secure the right opportunities.",
  },
];

const foundation = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Provide industry-focused SAP, AI and Data Science training through practical learning, live projects and career-oriented mentorship.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Become India's trusted destination for professional training by empowering learners and organizations through quality education.",
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment",
    description:
      "Deliver exceptional learning experiences with expert trainers, certification guidance and placement assistance.",
  },
];

const whyChooseUs = [
  "Live Training",
  "Industry Trainers",
  "Placement Assistance",
  "Certification",
  "Interview Preparation",
  "Real-time Projects",
];

const founderAchievements = [
  "SAP Consultant",
  "Corporate Trainer",
  "Mentor",
  "Placement Expert",
];

const stats = [
  { value: "5000+", label: "Students Trained", icon: GraduationCap },
  { value: "10+", label: "Years of Experience", icon: Award },
  { value: "95%", label: "Placement Support", icon: Users },
  { value: "40+", label: "Corporate Clients", icon: Building2 },
];

export default function AboutPage() {
  return (
    <>
      {/* ==========================================================
    HERO
    ========================================================== */}
      <section className="bg-white pb-12 pt-14 lg:pb-14 lg:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0769B4]">
                About Rise Infotech
              </span>

              <h1 className="mt-3 text-3xl font-bold leading-[1.1] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Building Future SAP & Data Professionals
              </h1>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                We combine industry expertise, practical learning, real-world
                projects and placement support to help every learner become
                job-ready.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {features.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/courses"
                className="mt-7 inline-block rounded-lg bg-[#0769B4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#055A99]"
              >
                Explore Courses
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-2xl bg-[#0769B4]/5" />
              <Image
                src="/rise2.jpeg"
                alt="Rise Infotech Training Facility"
                width={700}
                height={550}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================
    FOUNDER
    ========================================================== */}
      <section className="py-12 lg:py-14">
        <Container>
          <SectionHeading badge="Founder" title="Meet Our Founder" align="left" />

          <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Portrait */}
            <div className="flex gap-5 lg:block">
              <div className="w-32 flex-shrink-0 overflow-hidden rounded-xl lg:w-full">
                <Image
                  src="/Founder.png"
                  alt="Mr. Kumaresh Bidari"
                  width={500}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center lg:mt-4 lg:flex-row lg:justify-start lg:gap-6 lg:border-t lg:border-slate-100 lg:pt-4">
                <div>
                  <span className="text-xl font-bold text-slate-900">10+</span>
                  <span className="block text-xs text-slate-500">Years Experience</span>
                </div>
                <div className="mt-3 lg:mt-0">
                  <span className="text-xl font-bold text-slate-900">5000+</span>
                  <span className="block text-xs text-slate-500">Students Trained</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="border-l-2 border-[#0769B4] pl-6">
              <h3 className="text-xl font-bold text-slate-900">Mr. Kumaresh Bidari</h3>

              <div className="mt-1 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-[#0769B4] text-[#0769B4]" />
                  ))}
                </div>
                <span className="text-xs text-slate-500">Founder & CEO</span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Mr. Kumaresh Bidari is an experienced SAP ERP consultant,
                corporate trainer and technology mentor with over 10 years of
                industry expertise. Through practical learning, real-world
                implementation projects and personalized mentoring, he has
                helped thousands of students and professionals build
                successful careers in the SAP ecosystem.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {founderAchievements.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 text-[#0769B4]" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0769B4] text-white transition hover:bg-[#055A99]"
                >
                  <Linkedin size={15} />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-[#0769B4] hover:text-[#0769B4]"
                >
                  <Instagram size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================================
    VISION · MISSION · VALUES
    ========================================================== */}
      <section className="bg-slate-50 py-12 lg:py-14">
        <Container>
          <SectionHeading badge="Our Foundation" title="Vision, Mission & Values" />

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {foundation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <Icon size={22} className="text-[#0769B4]" />
                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ==========================================================
    WHY STUDENTS CHOOSE US
    ========================================================== */}
      <section className="py-12 lg:py-14">
        <Container>
          <SectionHeading badge="Why Choose Us" title="Why Students Choose Rise Infotech" />

          <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <CheckCircle2 size={15} className="flex-shrink-0 text-[#0769B4]" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==========================================================
    STATISTICS — signature band
    ========================================================== */}
      {/* ==========================================================
    STATISTICS
    ========================================================== */}
      <section className="border-y border-slate-100 bg-white py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="border-l border-slate-200 pl-5">
                  <Icon size={20} className="text-[#0769B4]" />
                  <h3 className="mt-3 text-3xl font-bold tabular-nums text-slate-900 sm:text-4xl">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      {/* ==========================================================
    CTA
    ========================================================== */}
      <CTASection
        title="Start Your SAP Journey Today"
        description="Join thousands of students who have transformed their careers with Rise Infotech."
        primaryButtonText="Explore Courses"
        primaryButtonHref="/#courses"
        secondaryButtonText="Book Free Consultation"
        secondaryButtonHref="/contact"
      />
    </>
  );
}