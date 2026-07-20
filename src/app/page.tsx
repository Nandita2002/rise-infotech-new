'use client'

import { useState } from 'react'

import Hero from '@/components/sections/Hero'
import Courses from '@/components/sections/Courses'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/sections/reviews'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Achievements from '@/components/sections/Achievements'
import AdmissionPopup from '@/components/popup/AdmissionPopup'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <AdmissionPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <Hero onOpenPopup={() => setShowPopup(true)} />

      <Achievements />
      <Courses />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  )
}