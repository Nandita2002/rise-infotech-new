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
      <div className="mb-12 bg-[#0769B4] px-8 py-10 text-center shadow-xl lg:px-16">
        <span className="inline-flex items-center  border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.25em] text-white backdrop-blur-sm">
          Where Our Students Work
        </span>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
          Our learners are building successful careers at leading companies across the IT industry.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6">


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

              {/* Company */}
              <p className="text-sm font-medium text-slate-500">
                Placed at
              </p>

              <p className="mt-1 font-semibold text-[#0769B4]">
                {item.company}
              </p>
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



      </div>
    </section>
  );
}