
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import Achievements from "@/components/sections/Achievements";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <>

      <main className="bg-white">


        {/* Placement Marquee */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-[#0769B4]">
                Placements
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Our Students Are Working At
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Rise Infotech learners have secured opportunities in leading
                multinational companies, consulting firms, and technology
                organizations.
              </p>
            </div>

            {/* Testimonials */}
            <TestimonialsGrid />


          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-3xl bg-[#0769B4] px-8 py-16 text-center text-white shadow-xl md:px-16">
              <h2 className="text-4xl font-bold">
                Ready to Start Your Success Story?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
                Join thousands of learners who have transformed their careers
                with industry-focused training, expert mentorship, and placement
                assistance.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-[#0769B4] transition hover:bg-slate-100"
                >
                  Book Free Consultation
                </Link>

                <Link
                  href="/sap-courses"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0769B4]"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}