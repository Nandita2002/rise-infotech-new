import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Courses from '@/components/sections/Courses'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Instructor from '@/components/sections/Instructor'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Courses />
      <WhyChooseUs />
      <Instructor />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
