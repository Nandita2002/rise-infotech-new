import TestimonialCard from "./TestimonialCard";
import { TestimonialStudentData } from "@/data/testimonial";

export default function TestimonialsGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {TestimonialStudentData.map((item) => (
        <TestimonialCard
          key={item.id}
          testimonial={{
            id: item.id,
            review: item.text,
            name: item.name,
            role: item.role,
            company: item.company,
            companyLogo: item.companyLogo,
          }}
        />
      ))}
    </div>
  );
}