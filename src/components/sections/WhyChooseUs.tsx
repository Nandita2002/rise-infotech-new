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
    
      <section className="py-20 lg:py-28 bg-[#F9FAFB] ">
<div className="mb-16 overflow-hidden  bg-[#0769B4] px-8 py-12 text-center shadow-xl">

  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
    WHY CHOOSE US
  </span>

  <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
    Why Thousands Choose Rise Infotech
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
    We combine practical industry knowledge with personalized mentoring to help
    learners become confident professionals.
  </p>

</div>
      
        <Container>
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
  )
}
