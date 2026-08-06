"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { StudentList } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
  // Remove duplicate companies
  const companies = StudentList.filter(
    (company, index, self) =>
      index ===
      self.findIndex((c) => c.company === company.company)
  );

  return (
    <section className="bg-[#F9FAFB] py-12 lg:py-16">
      {/* Heading */}
      <div className="mb-6 bg-[#0769B4] px-6 py-8 text-center shadow-xl lg:px-16">
        <h2 className="mt-3 text-4xl font-extrabold text-white lg:text-5xl">
          Where are students work?
        </h2>
      </div>


      {/* Running Banner */}
      <Marquee
        speed={40}
        pauseOnHover
        gradient={false}
        autoFill
      >
        {StudentList.map((item) => (
          <div
            key={item.id}
            className="mx-4 flex h-44 w-64 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0769B4] hover:shadow-xl"
          >
            {/* Student Name */}
            <h3 className="text-xl font-bold text-slate-900">
              {item.name}
            </h3>

            {/* Company Logo */}
            <div className="my-5 flex h-16 items-center justify-center">
              <Image
                src={item.companyLogo}
                alt={item.company}
                width={130}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>


          </div>
        ))}
      </Marquee>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Hear directly from our students about their learning journey and career success.
        </p>

        <Link
          href="/success-stories"
          className="mt-2 inline-flex items-center gap-2 text-[#0769B4] font-semibold hover:underline"
        >
          Read More Testimonials
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}