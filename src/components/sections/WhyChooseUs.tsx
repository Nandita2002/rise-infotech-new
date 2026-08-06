'use client'

import Container from '@/components/ui/Container'
import FeatureCard from '@/components/ui/FeatureCard'
import {
  Award,

  Briefcase,
  Building2,

  GraduationCap,
  Laptop,

  Users,
  Target,
  Eye,
} from 'lucide-react'



import SectionHeading from '@/components/ui/SectionHeading'


const features = [
  { icon: '🎯', title: 'Industry-Focused Curriculum', desc: 'Curriculum aligned with real SAP project requirements.' },
  { icon: '👨‍🏫', title: 'Certified Trainers', desc: 'Learn from SAP-certified professionals with 10+ years of experience.' },
  { icon: '💼', title: '100% Placement Support', desc: 'Dedicated placement team to help you land your dream SAP job.' },
  { icon: '🖥️', title: 'Live Project Training', desc: 'Hands-on exposure with real-time industry project simulations.' },
  { icon: '📜', title: 'Certification Guidance', desc: 'End-to-end support for SAP certification exams.' },
  { icon: '🔄', title: 'Flexible Batches', desc: 'Weekday and weekend batches to suit your schedule.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F9FAFB] py-12 lg:py-16">

      {/* Heading */}
      <div className="mb-6 bg-[#0769B4] px-6 py-8 text-center shadow-xl lg:px-16">
        <h2 className="mt-3 text-4xl font-extrabold text-white lg:text-5xl">
          Why Thousands Choose Rise Infotech ?
        </h2>



      </div>

      <Container>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

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
  )
}
