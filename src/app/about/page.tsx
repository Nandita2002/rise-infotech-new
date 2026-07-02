'use client'

import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Laptop,
  ShieldCheck,
  UserPlus,
  Users,
    Target,
  Eye,
} from 'lucide-react'

import FeatureCard from '@/components/ui/FeatureCard'

import {
  HeartHandshake,

} from 'lucide-react'

import CTA from '@/components/ui/CTA'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Stats from '@/components/ui/Stats'
import Timeline from '@/components/ui/Timeline'
import Testimonials from '@/components/sections/Testimonials'
import Instructor from '@/components/sections/Instructor'

export default function AboutPage() {
  const aboutStats = [
    {
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Delivering quality education',
    },
    {
      value: 5000,
      suffix: '+',
      label: 'Students Trained',
      description: 'Across India',
    },
    {
      value: 30,
      suffix: '+',
      label: 'SAP Modules',
      description: 'Functional & Technical',
    },
    {
      value: 95,
      suffix: '%',
      label: 'Placement Assistance',
      description: 'Career focused training',
    },
  ]

  const learningJourney = [
    {
      icon: UserPlus,
      title: 'Enroll',
      description:
        'Choose your preferred course and complete the admission process.',
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description:
        'Attend instructor-led sessions with practical business scenarios.',
    },
    {
      icon: ClipboardCheck,
      title: 'Projects',
      description:
        'Work on real-time industry projects and assignments.',
    },
    {
      icon: Award,
      title: 'Certification',
      description:
        'Get certification guidance and interview preparation.',
    },
    {
      icon: Briefcase,
      title: 'Placement',
      description:
        'Receive dedicated placement assistance to kickstart your career.',
    },
  ]

  return (
    <>
      <PageHero
        badge="About Rise Infotech"
        title="Empowering Careers Through Practical Learning"
        description="Rise Infotech helps students and professionals build successful careers through SAP ERP, Data Science, Corporate Training, Live Projects and Industry-focused learning."
        breadcrumbs={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About Us',
          },
        ]}
      />

      {/* ================= ABOUT STORY ================= */}

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <SectionHeading
                badge="Who We Are"
                title="Building Future Professionals Through Practical Learning"
                description="Rise Infotech is dedicated to transforming aspiring professionals into industry-ready experts through practical, career-focused education."
                align="left"
              />

              <p className="mt-6 leading-8 text-slate-600">
                We specialize in SAP ERP Functional & Technical Training,
                Corporate Training, Internship Programs, Industrial Visits,
                Data Science and Analytics programs designed to bridge the
                gap between academics and real industry requirements.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Our experienced trainers combine years of implementation
                experience with modern teaching methods, ensuring every
                learner gains practical knowledge through live projects,
                certification guidance and placement assistance.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <div className="flex items-center gap-3">
                  <Laptop className="text-blue-600" />
                  <span className="font-medium">
                    Live Projects
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="text-blue-600" />
                  <span className="font-medium">
                    Industry Experts
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" />
                  <span className="font-medium">
                    Certification Guidance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-blue-600" />
                  <span className="font-medium">
                    Placement Assistance
                  </span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-12 shadow-xl">

                <Building2
                  size={220}
                  className="mx-auto text-blue-600"
                />

                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

                    <CheckCircle2 className="text-green-600" />

                    <span>
                      SAP Functional & Technical Training
                    </span>

                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

                    <CheckCircle2 className="text-green-600" />

                    <span>
                      Corporate Training Programs
                    </span>

                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

                    <CheckCircle2 className="text-green-600" />

                    <span>
                      Internship & Live Projects
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      <Stats stats={aboutStats} />

      {/* Part 2 Starts Here */}
            {/* ================= MISSION • VISION • COMMITMENT ================= */}

      <section className="bg-slate-50 py-20 lg:py-28">
        <Container>
          <SectionHeading
            badge="Our Foundation"
            title="Driven by Purpose, Guided by Excellence"
            description="Everything we do is focused on helping learners gain practical knowledge, build confidence, and achieve successful careers."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'To deliver industry-oriented education through practical training, live projects, mentorship and career guidance that empowers learners for long-term success.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description:
                  'To become one of India’s most trusted institutes for SAP ERP, Data Science, Analytics and Corporate Learning by continuously delivering quality education.',
              },
              {
                icon: HeartHandshake,
                title: 'Our Commitment',
                description:
                  'We are committed to providing personalized learning experiences, expert mentorship, placement support and continuous professional development.',
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ================= WHY RISE INFOTECH ================= */}

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            badge="Why Choose Us"
            title="Why Thousands Choose Rise Infotech"
            description="We combine practical industry knowledge with personalized mentoring to help learners become confident professionals."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <FeatureCard
              icon={GraduationCap}
              title="Industry Expert Trainers"
              description="Learn from certified SAP consultants and experienced professionals with real implementation expertise."
              color="blue"
            />

            <FeatureCard
              icon={Laptop}
              title="Hands-on Live Projects"
              description="Gain practical exposure by working on industry-oriented assignments and real-time business scenarios."
              color="green"
            />

            <FeatureCard
              icon={Briefcase}
              title="Placement Assistance"
              description="Resume building, mock interviews and career guidance to help you secure the right opportunity."
              color="orange"
            />

            <FeatureCard
              icon={Building2}
              title="Corporate Training"
              description="Customized SAP and Analytics training solutions designed specifically for organizations."
              color="purple"
            />

            <FeatureCard
              icon={Award}
              title="Certification Guidance"
              description="Complete guidance for SAP certification preparation with expert mentoring and practice sessions."
              color="blue"
            />

            <FeatureCard
              icon={Users}
              title="Internship Programs"
              description="Industry internships and project-based learning to gain practical experience before entering the workforce."
              color="green"
            />

          </div>
        </Container>
      </section>

      {/* ================= LEARNING JOURNEY ================= */}

      <Timeline
        subtitle="OUR PROCESS"
        title="Your Learning Journey"
        items={learningJourney}
      />

      {/* Part 3 Starts Here */}
            {/* ================= FOUNDER MESSAGE ================= */}

   <Instructor />

      {/* ================= TESTIMONIALS ================= */}

      <Testimonials />

      {/* ================= CTA ================= */}

      <CTA
        badge="Start Your Journey"
        title="Ready to Build Your Career with Rise Infotech?"
        description="Join thousands of students and professionals who have transformed their careers through practical SAP ERP training, Data Science programs, Corporate Learning, Live Projects and dedicated placement assistance."
        primaryButtonText="Explore Courses"
        primaryButtonHref="/courses"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

    </>
  )
}