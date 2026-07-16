import Image from "next/image";
import Link from "next/link";

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
export default function AboutPage() {
  return (
    <>
    {/* ==========================================================
WHO WE ARE
========================================================== */}

<section className="bg-white py-14 lg:py-16">
  <Container>
    <div className="grid items-center gap-10 lg:grid-cols-2">

      {/* Left Content */}

      <div>
        <SectionHeading
          badge="Who We Are"
          title="Empowering Careers Through Practical Learning"
          align="left"
        />

        <p className="mt-6 leading-8 text-slate-600">
          Rise Infotech empowers individuals with comprehensive SAP ERP
          training, including End User Courses, Consultant-Level Training,
          Corporate Programs and Internship Programs for college students.
          Through flexible online and offline learning, real-time projects,
          and expert mentorship, we prepare learners with practical,
          job-ready skills for successful careers.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          Beyond training, we also provide IT Services, SAP Consulting,
          SAP Outsourcing and Corporate Training solutions, helping
          organizations accelerate digital transformation with skilled
          professionals and implementation support.
        </p>

        {/* Highlights */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {features.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-[#0769B4]"
              />

              <span className="font-medium text-slate-700">
                {item}
              </span>
            </div>

          ))}

        </div>

      </div>

      {/* Right Image */}

      <div>

        <Image
          src="/rise2.jpeg"
          alt="Rise Infotech Training"
          width={700}
          height={550}
          className="w-full rounded-2xl border border-slate-200 object-cover shadow-lg"
        />

      </div>

    </div>
  </Container>
</section>

{/* ==========================================================
WHY CHOOSE RISE INFOTECH
========================================================== */}

<section className="bg-slate-50 py-14 lg:py-16">
  <Container>

    <SectionHeading
      badge="Why Choose Us"
      title="Why Students Choose Rise Infotech"
    />

    <div className="mt-10 grid gap-6 md:grid-cols-2">

      {whyChoose.map((item) => {

        const Icon = item.icon

        return (

          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0769B4] hover:shadow-lg"
          >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-[#0769B4]">

              <Icon
                size={28}
                className="text-[#0769B4] transition-all duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {item.description}
            </p>

          </div>

        )

      })}

    </div>

  </Container>
</section>
{/* ==========================================================
MEET OUR FOUNDER
========================================================== */}

<section className="bg-white py-14 lg:py-16">
  <Container>

    <SectionHeading
      badge="Founder"
      title="Meet Our Founder"
      description="Driven by industry experience and a passion for mentoring, our founder has helped thousands of students build successful careers."
    />

    <div className="mt-10 grid items-center gap-10 lg:grid-cols-[340px_1fr]">

      {/* Founder Image */}

      <div>

        <Image
          src="/founder.png"
          alt="Mr. Kumaresh Bidari"
          width={500}
          height={600}
          className="w-full rounded-2xl border border-slate-200 shadow-lg"
        />

      </div>

      {/* Founder Details */}

      <div>

        <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-[#0769B4]">
          Founder & CEO
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Mr. Kumaresh Bidari
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          Mr. Kumaresh Bidari is an experienced SAP ERP consultant,
          corporate trainer and technology mentor with over 10 years of
          industry expertise. Through practical learning, real-world
          implementation projects and personalized mentoring, he has helped
          thousands of students and professionals build successful careers
          in the SAP ecosystem.
        </p>

        {/* Experience */}

        <div className="mt-8 grid grid-cols-2 gap-5">

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

            <h3 className="text-3xl font-bold text-[#0769B4]">
              10+
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Years of Experience
            </p>

          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

            <h3 className="text-3xl font-bold text-[#0769B4]">
              5000+
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Students Mentored
            </p>

          </div>

        </div>

        {/* Social */}

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:border-[#0769B4] hover:text-[#0769B4]"
          >
            Instagram
          </Link>

          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-xl bg-[#0769B4] px-5 py-3 font-medium text-white transition hover:bg-[#055A99]"
          >
            LinkedIn
          </Link>

        </div>

      </div>

    </div>

  </Container>
</section>
{/* ==========================================================
OUR FOUNDATION
========================================================== */}

<section className="bg-slate-50 py-14 lg:py-16">
  <Container>

    <SectionHeading
      badge="Our Foundation"
      title="Driven by Purpose, Guided by Excellence"
      description="Everything we do is centered around helping learners gain practical knowledge, build confidence and achieve successful careers."
    />

    <div className="mt-10 grid gap-6 lg:grid-cols-3">

      {foundation.map((item) => {

        const Icon = item.icon

        return (

          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0769B4] hover:shadow-lg"
          >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-[#0769B4]">

              <Icon
                size={28}
                className="text-[#0769B4] transition-all duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {item.description}
            </p>

          </div>

        )

      })}

    </div>

  </Container>
</section>
{/* ==========================================================
CALL TO ACTION
========================================================== */}

<CTASection
  title="Ready to Build Your Career?"
  description="Join Rise Infotech and gain practical skills through live instructor-led training, real-world projects, certification guidance and dedicated placement assistance."
  primaryButtonText="Explore Courses"
  primaryButtonHref="/courses"
  secondaryButtonText="Contact Us"
  secondaryButtonHref="/contact"
/>
</>
  );
}