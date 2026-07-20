"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: number | string;
  review: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
}

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 170;
  const isLong = testimonial.review.length > maxLength;

  const review = expanded
    ? testimonial.review
    : testimonial.review.substring(0, maxLength) +
    (isLong ? "..." : "");

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0769B4] hover:shadow-xl">
      {/* Avatar */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0769B4] text-2xl font-bold text-white">
        {testimonial.name.charAt(0)}
      </div>

      {/* Stars */}
      <div className="mt-6 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-6 flex-1 text-center text-[15px] leading-7 text-slate-600">
        "{review}"
      </p>

      {/* Read More */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-center text-sm font-semibold text-[#0769B4] hover:text-[#055A99]"
        >
          {expanded ? "Read Less ↑" : "Read More →"}
        </button>
      )}

      {/* Divider */}
      <div className="my-8 border-t border-slate-200" />

      {/* Student */}
      <h3 className="text-center text-xl font-bold text-slate-900">
        {testimonial.name}
      </h3>

      {testimonial.role && (
        <p className="mt-1 text-center text-sm text-slate-500">
          {testimonial.role}
        </p>
      )}

      {/* Company Logo */}
      <div className="mt-6 flex h-12 items-center justify-center">
        <Image
          src={testimonial.companyLogo}
          alt={testimonial.company}
          width={130}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Company */}
      <p className="mt-4 text-center font-semibold text-[#0769B4]">
        {testimonial.company}
      </p>
    </div>
  );
}