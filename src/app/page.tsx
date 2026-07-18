
import Hero from '@/components/sections/Hero'
import Courses from '@/components/sections/Courses'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import AdmissionPopup from "@/components/popup/AdmissionPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <>
        <AdmissionPopup />
        <Hero />
        <Courses />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </>
    </main>
  )
}
