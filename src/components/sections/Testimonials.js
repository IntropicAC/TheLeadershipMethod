import { Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonialsContent } from "@/lib/constants";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" background="cream">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
          {testimonialsContent.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsContent.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-6">
              <div className="w-10 h-10 bg-brand-nude rounded-full flex items-center justify-center">
                <Quote size={20} className="text-brand-charcoal" />
              </div>
            </div>

            {/* Quote */}
            <p className="text-brand-charcoal/80 italic leading-relaxed mb-6 mt-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="border-t border-brand-nude pt-4">
              <p className="font-semibold text-brand-charcoal">
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p className="text-sm text-brand-charcoal/60">
                  {testimonial.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
