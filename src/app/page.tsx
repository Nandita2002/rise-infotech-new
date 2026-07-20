
import Hero from '@/components/sections/Hero'
import Courses from '@/components/sections/Courses'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/sections/reviews'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import AdmissionPopup from "@/components/popup/AdmissionPopup";
import Achievements from '@/components/sections/Achievements'


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <>
        <AdmissionPopup />
        <Hero />
        <Achievements />
        <Courses />

        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <Contact />
      </>
    </main>
  )
}
