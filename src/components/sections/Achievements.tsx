"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { StudentList } from "@/data/testimonial";

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
          Our Achievements
        </span>

        <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Trusted by Leading Companies
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
          Our learners have transformed their careers and are now working
          with some of the world's leading organizations.
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

        {/* Stats */}
        {/* <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-50 p-8 text-center">
            <h3 className="text-4xl font-bold text-[#0769B4]">
              5000+
            </h3>
            <p className="mt-2 text-slate-600">
              Students Trained
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-8 text-center">
            <h3 className="text-4xl font-bold text-[#0769B4]">
              1000+
            </h3>
            <p className="mt-2 text-slate-600">
              Successful Placements
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-8 text-center">
            <h3 className="text-4xl font-bold text-[#0769B4]">
              50+
            </h3>
            <p className="mt-2 text-slate-600">
              Hiring Partners
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-8 text-center">
            <h3 className="text-4xl font-bold text-[#0769B4]">
              10+
            </h3>
            <p className="mt-2 text-slate-600">
              Years of Excellence
            </p>
          </div>

        </div> */}

      </div>
    </section>
  );
}